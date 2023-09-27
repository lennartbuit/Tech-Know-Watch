import {LitElement, html} from 'lit';
import {customElement} from 'lit/decorators.js';

/**
 * Create your watch here. Exercises:
 *
 * 1. Orient yourself around this repository.
 *
 * There are 8 components for watch building:
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
 * The backdrop and dial components also accept a `palette` attribute that can
 * be used to their color scheme.
 *
 * The possible palettes are documented in `styles/palette.ts`.
 *
 *
 * ----------------------------------------------------------------------------
 *
 * 2. Create a time-only watch.
 *
 * Show the time with three hands on the main dial. Note that mechanical
 * watches show time in "sweeping" fashion, so the seconds hand glides across
 * the dial, and the minute/hour hands also rotate continually.
 *
 * Useful resources:
 *   1. `setInterval` - https://developer.mozilla.org/en-US/docs/Web/API/setInterval
 *   2. `requestAnimationFrame` - https://developer.mozilla.org/en-US/docs/Web/API/window/requestAnimationFrame
 *
 *
 * ----------------------------------------------------------------------------
 *
 * 3. Create a watch that can show seconds in a subdial.
 *
 * Extend your watch to show running seconds in a subdial at the 6 o'clock
 * position. Also add a pusher at the 4 o'clock position that toggles between
 * showing the running seconds with the main hand / in a subdial.
 *
 * Useful resources:
 *  1. Lit `when` directive -  https://lit.dev/docs/templates/directives/#when
 *
 *
 * ----------------------------------------------------------------------------
 *
 * 4. Create a watch that has a chronograph as secondary function.
 *
 * Your watch should be extended so that it can measure elapsed time.
 *
 * Use the:
 *   1. Main second hand for the running seconds of the chronograph function.
 *   2. Subdial at 9 o'clock for the running seconds of the time function.
 *   3. Subdial at 3 o'clock for 1-30 minutes of the chronograph function.
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
 * compilcations you can still add. For example a pulsimeter track on the case
 * can be used to quickly calculate someones heartbeat by measuring the
 * elapsed time of 15 or 30 beats.
 *
 * Useful resources;
 *   1. List of complications - https://teddybaldassarre.com/blogs/watches/watch-complications
 */

@customElement('nedap-watch')
export class NedapWatch extends LitElement {
  override render() {
    return html`
      <nedap-case>
        <!-- TODO: Implementation is missing :( -->
      </nedap-case>
    `
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'nedap-watch': NedapWatch;
  }
}
