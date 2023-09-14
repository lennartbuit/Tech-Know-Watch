import {LitElement, html} from 'lit';
import {customElement, property} from 'lit/decorators.js';

import styles from './backdrop.styles';
import {Palette} from '../../styles';
import {sample} from '../../utils/sample';
import type {Palette as PaletteType} from '../../styles';

/**
 * @summary Backdrops show a Nedap-style two-toned background.
 *
 * @slot - Content.
 */
@customElement('nedap-backdrop')
export class NedapBackdrop extends LitElement {
  static override styles = styles;

  /** The palette for this backdrop. */
  @property({type: String, reflect: true}) palette: PaletteType = 'heritage';

  handlePalette() {
    this.palette = sample(
      Palette.filter((palette) => palette !== this.palette)
    );
  }

  override render() {
    return html`
      <div class="backdrop">
        <slot @palette-swap=${this.handlePalette}></slot>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'nedap-backdrop': NedapBackdrop;
  }
}
