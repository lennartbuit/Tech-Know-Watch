import {LitElement, html} from 'lit';
import {customElement} from 'lit/decorators.js';

import styles from './greeting.styles';

/**
 * @summary Greetings welcome you to the world of webcomponents.
 *
 * @slot title - The title of the greeting.
 * @slot body - The body of the greeting.
 *
 * @cssproperty --greeting-title-color - The title's text color.
 * @cssproperty --greeting-body-color - The body's text color.
 */
@customElement('nedap-greeting')
export class NedapGreeting extends LitElement {
  static override styles = styles;

  override render() {
    return html`
      <div class="greeting">
        <div class="greeting__title">
          <slot name="title"></slot>
        </div>
        <div class="greeting__body">
          <slot name="body"></slot>
        </div>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'nedap-greeting': NedapGreeting;
  }
}
