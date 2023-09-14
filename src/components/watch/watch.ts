import {LitElement, html} from 'lit';
import {customElement, property} from 'lit/decorators.js';

import {choose} from 'lit/directives/choose.js';
import {when} from 'lit/directives/when.js';

import {Palette} from '../../styles';
import {sample} from '../../utils/sample';
import {TimerController} from '../../controllers';
import type {Palette as PaletteType} from '../../styles';

/**
 * Create your watch here. Exercises:
 *
 * 1. Orient yourself around this repository.
 *
 * There are 7 components for watch building:
 *    1. Case
 *    2. Dial
 *    3. Hand
 *    4. Markers
 *    5. Numerals
 *    6. Pusher
 *    7. Logo
 *
 * There are 2 other components you will not need in your watch:
 *    1. Backdrop
 *    2. Greeting
 *
 * Each of these components has its own folder and come with documentation
 * about its slots, attributes and css properties in its main TypeScript file.
 *
 * The backdrop and dial components also accept a `palette` attribute that
 * change their color scheme.
 *
 * Useful resources:
 *   1. Possible palettes - `styles/palette.ts`.
 *
 *
 * ----------------------------------------------------------------------------
 *
 * 2. Create a time-only watch.
 *
 * Show the time with three hands on the main dial. Note that mechanical
 * watches show time in sweeping fashion, so the seconds hand glides across
 * the dial, and the minute/hour hands also rotate continually.
 *
 * Useful resources:
 *   1. `setInterval` - https://developer.mozilla.org/en-US/docs/Web/API/setInterval
 *   2. `requestAnimationFrame` - https://developer.mozilla.org/en-US/docs/Web/API/window/requestAnimationFrame
 *   3. `this` binding - note a function references passed into
 *      `setInterval`/`requestAnimationFrame` might be called with `this`
 *      bound to `undefined`. Consider `bind` or use arrow functions - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/bind
 *
 *
 * ----------------------------------------------------------------------------
 *
 * 3. Create a watch that conditionally shows seconds in a subdial.
 *
 * Extend your watch to show running seconds in a subdial at the 6 o'clock
 * position. Also add a pusher at the 10 o'clock position that toggles between
 * showing the running seconds with the main hand or showing running seconds
 * in a subdial.
 *
 * Useful resources:
 *  1. Lit `when` directive -  https://lit.dev/docs/templates/directives/#when
 *
 *
 * ----------------------------------------------------------------------------
 *
 * 4. Create a watch with a chronograph as secondary function.
 *
 * Your watch should be extended so that it can measure elapsed time.
 *
 * Use the:
 *   1. Main second hand for the running seconds of the chronograph function.
 *   2. Subdial at 9 o'clock for the running seconds of the time function.
 *   3. Subdial at 3 o'clock for 0-30 minutes of the chronograph function.
 *   4. Subdial at 9 o'clock for 0-12 hours of the chronograph function.
 *   5. Pusher at 2 o'clock for starting and pausing the chronograph function.
 *   6. Pusher at 4 o'clock for resetting the chronograph function.
 *
 * Useful resources:
 *   1. Lit controllers - https://lit.dev/docs/composition/controllers/
 *
 *
 * ----------------------------------------------------------------------------
 *
 * 5. Build an additional complication.
 *
 * You completed the workshop 🎉. If you got all inspired, there are plenty of
 * complications you can still add. For example:
 *
 *   1. Add a pulsometer track on the cases bezel to quickly determine
 *      heartbeat by measuring elapsed time of 15 or 30 beats.
 *   2. Add a pusher at the 8 o'clock position to change the palette used by
 *      the watch. You can also emit an event when a watch swaps its palette
 *      so that backdrop does the same!
 *
 * Useful resources:
 *   1. List of complications - https://teddybaldassarre.com/blogs/watches/watch-complications
 */

@customElement('nedap-watch')
export class NedapWatch extends LitElement {
  #time: TimerController = new TimerController(this);
  #chrono: TimerController = new TimerController(this);

  @property({type: String}) mode: 'time' | 'chronograph' = 'time';

  @property({type: Boolean, attribute: 'split-seconds'}) splitSeconds = false;

  @property({type: String}) scale: 'pulsometer' | undefined;

  @property({type: String, attribute: 'dial-palette'})
  dialPalette: PaletteType = Palette[0];

  @property({type: String, attribute: 'subdial-palette'}) subdialPalette:
    | PaletteType
    | undefined;

  override connectedCallback(): void {
    super.connectedCallback();

    this.#time.setTime(new Date());
    this.#time.start();
  }

  handleSplitSeconds() {
    this.splitSeconds = !this.splitSeconds;
  }

  handlePalette() {
    this.dialPalette = sample(
      Palette.filter((palette) => palette !== this.dialPalette)
    );
    this.subdialPalette = sample(
      Palette.filter((palette) => palette !== this.subdialPalette)
    );

    this.dispatchEvent(
      new CustomEvent('palette-swap', {composed: true, bubbles: true})
    );
  }

  handleStartStop() {
    if (this.#chrono.running) {
      this.#chrono.stop();
    } else {
      this.#chrono.start();
    }
  }

  handleReset() {
    this.#chrono.reset();
  }

  override render() {
    return html`
      <nedap-case>
        ${choose(this.scale, [
          [
            'pulsometer',
            () =>
              html`
                <nedap-pulsometer-scale slot="bezel"></nedap-pulsometer-scale>
              `,
          ],
        ])}
        ${when(
          this.mode === 'time' || !this.scale,
          () => html`
            <nedap-pusher
              slot="10-o-clock"
              part="split-seconds-pusher"
              @click=${this.handleSplitSeconds}
            ></nedap-pusher>
          `
        )}

        <nedap-pusher
          slot="8-o-clock"
          part="palette-pusher"
          @click=${this.handlePalette}
        ></nedap-pusher>

        ${when(
          this.mode == 'chronograph',
          () => html`
            <nedap-pusher
              slot="2-o-clock"
              @click=${this.handleStartStop}
            ></nedap-pusher>
            <nedap-pusher
              slot="4-o-clock"
              @click=${this.handleReset}
              ?disabled=${this.#chrono.running}
            ></nedap-pusher>
          `
        )}

        <nedap-dial palette="${this.dialPalette}">
          <nedap-logo slot="12-o-clock"></nedap-logo>

          <nedap-markers slot="markers" step="1" max="60"></nedap-markers>
          <nedap-markers
            slot="markers"
            step="5"
            max="60"
            size="medium"
          ></nedap-markers>
          <nedap-numerals slot="numerals" step="3" max="12"></nedap-numerals>

          <!-- In all modes, hours and minutes are normal hands -->
          <nedap-hand
            variant="hours"
            .rotationDegrees=${this.#time.hoursDegrees}
          ></nedap-hand>
          <nedap-hand
            variant="minutes"
            .rotationDegrees=${this.#time.minutesDegrees}
          ></nedap-hand>

          <!-- When we are in chrono mode, chrono minutes/hours are in subdials -->
          ${when(
            this.mode === 'chronograph',
            () => html`
              <nedap-dial slot="3-o-clock" palette="${this.subdialPalette}">
                <nedap-markers slot="markers" step="1" max="30"></nedap-markers>
                <nedap-markers
                  slot="markers"
                  step="10"
                  max="30"
                  size="medium"
                ></nedap-markers>
                <nedap-numerals
                  slot="numerals"
                  step="10"
                  max="30"
                ></nedap-numerals>
                <nedap-hand
                  variant="seconds"
                  .rotationDegrees=${this.#chrono.minutesDegrees / 2}
                ></nedap-hand>
              </nedap-dial>
              <nedap-dial slot="6-o-clock" palette="${this.subdialPalette}">
                <nedap-markers slot="markers" step="1" max="12"></nedap-markers>
                <nedap-markers
                  slot="markers"
                  step="3"
                  max="12"
                  size="medium"
                ></nedap-markers>
                <nedap-numerals
                  slot="numerals"
                  step="3"
                  max="12"
                ></nedap-numerals>
                <nedap-hand
                  variant="seconds"
                  .rotationDegrees=${this.#chrono.hoursDegrees}
                ></nedap-hand>
              </nedap-dial>
            `
          )}

          <!-- We have a main second hands in chrono mode, or when we don't have split seconds. This main hand can show either chrono or time seconds. -->
          ${when(
            this.mode === 'chronograph' || !this.splitSeconds,
            () => html`
              <!-- The main hand shows chrono seconds in chrono mode with either splitSeconds to true, or a scale implying splitSeconds is true. Otherwise it shows time seconds. -->
              <nedap-hand
                variant="seconds"
                .rotationDegrees=${this.mode === 'chronograph' &&
                (this.splitSeconds || this.scale)
                  ? this.#chrono.secondsDegrees
                  : this.#time.secondsDegrees}
              ></nedap-hand>
            `
          )}

          <!-- We have a subdial for seconds if we are in chrono mode, or splitSeconds is true. This subdial can show either chrono or time seconds. -->
          ${when(
            this.mode === 'chronograph' || this.splitSeconds,
            () => html`
              <!-- In chrono mode, its at 9 o'clock, otherwise 6 o'clock -->
              <nedap-dial
                slot=${this.mode === 'chronograph' ? '9-o-clock' : '6-o-clock'}
                palette="${this.subdialPalette}"
              >
                <nedap-markers slot="markers" step="5" max="60"></nedap-markers>
                <nedap-markers
                  slot="markers"
                  step="20"
                  max="60"
                  size="medium"
                ></nedap-markers>
                <nedap-numerals
                  slot="numerals"
                  step="20"
                  max="60"
                ></nedap-numerals>
                <!-- The subdial shows chrono seconds in chrono mode without splitSeconds or a scale implying no splitSeconds. Otherwise it shows time seconds. -->
                <nedap-hand
                  variant="seconds"
                  .rotationDegrees=${this.mode === 'chronograph' &&
                  !this.scale &&
                  !this.splitSeconds
                    ? this.#chrono.secondsDegrees
                    : this.#time.secondsDegrees}
                ></nedap-hand>
              </nedap-dial>
            `
          )}
        </nedap-dial>
      </nedap-case>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'nedap-watch': NedapWatch;
  }
}
