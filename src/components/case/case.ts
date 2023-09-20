import {LitElement, html} from 'lit';
import {customElement} from 'lit/decorators.js';

import styles from './case.styles';

/**
 * @summary Cases wrap around dials
 *
 * @slot - Dial
 * @slot 2-o-clock - Pusher at the 2 o'clock position
 * @slot 4-o-clock - Pusher at the 4 o'clock position
 * @slot 8-o-clock - Pusher at the 8 o'clock position
 * @slot 10-o-clock - Pusher at the 10 o'clock position
 */
@customElement('nedap-case')
export class NedapCase extends LitElement {
  static override styles = styles;

  override render() {
    return html`
      <div class="case">
        <slot name="2-o-clock"></slot>
        <slot name="4-o-clock"></slot>
        <slot name="8-o-clock"></slot>
        <slot name="10-o-clock"></slot>
        <div class="case__outer-rim">
          <div class="case__bezel">
            <slot name="bezel"></slot>
            <div class="case__inner-rim">
              <div class="case__dial-surface">
                <slot></slot>
                <div class="case__shadow"></div>
                <div class="case__glass"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'nedap-case': NedapCase;
  }
}
