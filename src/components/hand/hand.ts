import {LitElement, html} from 'lit';
import {customElement, property} from 'lit/decorators.js';
import {classMap} from 'lit/directives/class-map.js';
import {styleMap} from 'lit/directives/style-map.js';

import styles from './hand.styles';

/**
 * @summary A hand shows a value on a radial scale
 *
 * @cssproperty --hand-color - The hand's color.
 */
@customElement('nedap-hand')
export class NedapHand extends LitElement {
  static override styles = styles;

  /** The style of the hand */
  @property({type: String}) variant: 'seconds' | 'minutes' | 'hours' =
    'seconds';

  /** The rotation of the hand in degrees, clockwise starting pointing up. */
  @property({type: Number, attribute: 'rotation-degrees'}) rotationDegrees = 0;

  get classes() {
    return {
      hand: true,
      [`hand--${this.variant}`]: this.variant,
    };
  }

  override render() {
    return html`
      <div
        class="${classMap(this.classes)}"
        style="${styleMap({
          '--rotation': `${this.rotationDegrees}deg`,
        })}"
      >
        <div class="hand__bar"></div>
        <div class="hand__center"></div>
      </div>
    `;
  }
}
