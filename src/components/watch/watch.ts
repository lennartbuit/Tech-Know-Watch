import {LitElement} from 'lit';
import {customElement} from 'lit/decorators.js';

@customElement('nedap-watch')
export class NedapWatch extends LitElement {
  /* TODO */
}

declare global {
  interface HTMLElementTagNameMap {
    'nedap-watch': NedapWatch;
  }
}
