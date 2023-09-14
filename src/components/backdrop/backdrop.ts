import {LitElement, html} from 'lit';
import {customElement, property} from 'lit/decorators.js';

import styles from './backdrop.styles';
import type {Palette} from '../../styles';

/**
 * @summary Backdrops show a Nedap-style two-toned background.
 *
 * @slot - Content
 */
@customElement('nedap-backdrop')
export class NedapBackdrop extends LitElement {
  static override styles = styles;

  /** The palette for this backdrop */
  @property({type: String, reflect: true}) palette: Palette = 'heritage';

  override render() {
    return html`
      <div class="backdrop">
        <slot></slot>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'nedap-backdrop': NedapBackdrop;
  }
}
