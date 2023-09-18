import {css} from 'lit';

import { palette, reset } from '../../styles';

export default [
  reset,
  palette,
  css`
    :host {
      display: block;
      position: relative;
      height: 100%;
      width: 100%;
      container-type: size;
    }

    ::slotted(*) {
      position: relative;
      z-index: 1;
    }

    .backdrop {
      position: relative;
      width: 100%;
      height: 100%;
      padding: 10cqh 10cqw;
      inset: 0;
      overflow: hidden;
      background-color: var(--color-palette-background);
    }

    .backdrop::before {
      position: absolute;
      content: '';
      background-color: green;
      transform-origin: right 75%;
      transform: rotate(-30deg);
      width: 100%;
      height: 200%;
      left: -40%;
      bottom: 0;
      border-radius: 100px;
      background-color: var(--color-palette-foreground);
    }
  `,
];
