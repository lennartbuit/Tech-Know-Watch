import {LitElement} from 'lit';
import {customElement} from 'lit/decorators.js';

import svg from './logo.svg';

/**
 * @summary Logo render the nedap logo
 *
 * @cssproperty --logo-color-spark - The spark's color
 * @cssproperty ----logo-color-text - The lettering's color
 */

@customElement('nedap-logo')
export class NedapLogo extends LitElement {
  override render() {
    return svg;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'nedap-logo': NedapLogo;
  }
}
