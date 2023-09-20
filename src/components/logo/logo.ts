import {LitElement} from 'lit';
import {customElement} from 'lit/decorators.js';

import styles from './logo.styles';
import svg from './logo.svg';

/**
 * @summary Logo render the Nedap logo.
 *
 * @cssproperty --logo-color-spark - The spark's color.
 * @cssproperty --logo-color-text - The lettering's color.
 */

@customElement('nedap-logo')
export class NedapLogo extends LitElement {
  static override styles = styles;

  override render() {
    return svg;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'nedap-logo': NedapLogo;
  }
}
