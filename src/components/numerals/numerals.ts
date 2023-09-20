import {LitElement, html} from 'lit';
import {customElement, property} from 'lit/decorators.js';
import {map} from 'lit/directives/map.js';
import {range} from 'lit/directives/range.js';
import {styleMap} from 'lit/directives/style-map.js';

import styles from './numerals.styles';

/**
 * @summary Numerals assign numeric values to a track.
 *
 * @cssproperty --numerals-color - The color of the numerals.
 */
@customElement('nedap-numerals')
export class NedapNumerals extends LitElement {
  static override styles = styles;

  /** The step size between numerals shown. */
  @property({type: Number}) step = 1;

  /** The largest value denoted by these numerals. */
  @property({type: Number}) max = 60;

  override render() {
    return html`
      <div class="numerals">
        ${map(range(0, this.max, this.step), (i) => {
          const degrees = `${(i / this.max) * 360}deg`;

          return html`
            <div
              class="numerals__index"
              style=${styleMap({'--degrees': degrees})}
            >
              ${i == 0 ? this.max : i}
            </div>
          `;
        })}
      </div>
    `;
  }
}
