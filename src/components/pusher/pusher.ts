import {LitElement, html} from 'lit';
import {customElement, property} from 'lit/decorators.js';

import styles from './pusher.styles';

/**
 * @summary Pushers are used to activate functions of a watch.
 */
@customElement('nedap-pusher')
export class NedapPusher extends LitElement {
  static override shadowRootOptions: ShadowRootInit = {
    ...LitElement.shadowRootOptions,
    delegatesFocus: true,
  };

  static override styles = styles;

  /** Whether the pusher is disabled. */
  @property({type: Boolean}) disabled = false;

  override render() {
    return html` <button class="pusher" ?disabled=${this.disabled}></button> `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'nedap-pusher': NedapPusher;
  }
}
