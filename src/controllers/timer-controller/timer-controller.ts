import {ReactiveController, ReactiveControllerHost} from 'lit';

const MILLIS_PER_SECOND = 1000;
const SECONDS_PER_MINUTE = 60;
const MINUTES_PER_HOUR = 60;
const SECONDS_PER_HOUR = SECONDS_PER_MINUTE * MINUTES_PER_HOUR;
const HOURS_PER_HALF_DAY = 12;

const animationFramePromise = () =>
  new Promise((resolve) => requestAnimationFrame(resolve));

const animationFrames = async function* (abortController: AbortController) {
  while (!abortController.signal.aborted) {
    yield await animationFramePromise();
  }
};

export class TimerController implements ReactiveController {
  #host: ReactiveControllerHost;
  #abortController: AbortController = new AbortController();
  #millis = 0;

  running = false;

  get secondsDegrees() {
    const secondsRemainder =
      (this.#millis / MILLIS_PER_SECOND) % SECONDS_PER_MINUTE;
    return (secondsRemainder / SECONDS_PER_MINUTE) * 360;
  }

  get minutesDegrees() {
    const minuteRemainder =
      (this.#millis / MILLIS_PER_SECOND / SECONDS_PER_MINUTE) %
      MINUTES_PER_HOUR;
    return (minuteRemainder / MINUTES_PER_HOUR) * 360;
  }

  get hoursDegrees() {
    const hoursRemainder =
      (this.#millis / MILLIS_PER_SECOND / SECONDS_PER_HOUR) %
      HOURS_PER_HALF_DAY;
    return (hoursRemainder / HOURS_PER_HALF_DAY) * 360;
  }

  constructor(host: ReactiveControllerHost) {
    this.#host = host;
    host.addController(this);
  }

  hostDisconnected(): void {
    this.stop();
  }

  setTime(to: Date) {
    const offsetMillis =
      -to.getTimezoneOffset() * SECONDS_PER_MINUTE * MILLIS_PER_SECOND;
    this.#millis = to.getTime() + offsetMillis;
  }

  reset() {
    this.#millis = 0;
  }

  async start() {
    this.#abortController = new AbortController();

    this.running = true;

    let prevTime = performance.now();

    for await (const nowTime of animationFrames(this.#abortController)) {
      const diff = (nowTime as number) - prevTime;

      this.#millis += diff;

      this.#host.requestUpdate();

      prevTime = nowTime as number;
    }
  }

  stop() {
    this.#abortController.abort();
    this.running = false;
  }
}
