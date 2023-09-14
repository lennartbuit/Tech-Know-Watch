import {LitElement, html} from 'lit';
import {customElement, property} from 'lit/decorators.js';
import {map} from 'lit/directives/map.js';
import {range} from 'lit/directives/range.js';
import {styleMap} from 'lit/directives/style-map.js';

import styles from './markers.styles';

/**
 * @summary Markers mark values along a radial axis.
 *
 * @cssproperty --marker-color - The color of the markers.
 */
@customElement('nedap-markers')
export class NedapMarkers extends LitElement {
  static override styles = styles;

  @property({type: String, reflect: true}) size: 'small' | 'medium' = 'small';

  @property({type: Number}) step = 5;

  @property({type: Number}) max = 60;

  override render() {
    return html`
      <div class="markers">
        ${map(range(0, this.max, this.step), (i) => {
          const degrees = `${(i / this.max) * 360}deg`;

          return html`
            <div
              class="markers__index"
              style=${styleMap({'--degrees': degrees})}
            >
            </div>
          `;
        })}
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'nedap-markers': NedapMarkers;
  }
}
