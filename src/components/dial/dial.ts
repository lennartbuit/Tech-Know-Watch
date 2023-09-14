import {LitElement, html} from 'lit';
import {customElement, property} from 'lit/decorators.js';

import styles from './dial.styles';
import type {Palette} from '../../styles';

/**
 * @summary Dials show values by rotating hands around its center axis
 *
 * @slot - The dials hands
 * @slot markers - Markers on the dial
 * @slot numerals - Numerals on the dial
 * @slot 3-o-clock - Subdial at the 3 o'clock position
 * @slot 6-o-clock - Subdial at the 6 o'clock position
 * @slot 9-o-clock - Subdial at the 9 o'clock position
 *
 * @cssproperty --dial-color - The dial's color.
 */
@customElement('nedap-dial')
export class NedapDial extends LitElement {
  static override styles = styles;

  /** The palette used for this dial */
  @property({type: String, reflect: true}) palette: Palette | null = null;

  override render() {
    return html`
      <div class="dial">
        <div class="dial__shadow"></div>

        <slot name="markers"></slot>
        <slot name="numerals"></slot>

        <slot name="3-o-clock"></slot>
        <slot name="6-o-clock"></slot>
        <slot name="9-o-clock"></slot>
        <slot name="12-o-clock"></slot>

        <slot></slot>
        <div class="stem"></div>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'nedap-dial': NedapDial;
  }
}
