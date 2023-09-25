import {css} from 'lit';

import {reset} from '../../styles';

export default [
  reset,
  css`
    :host([size='small']) {
      --marker-width: calc(2.5% * var(--dial-scale-factor, 1));
      --marker-height: calc(0.5% * var(--dial-scale-factor, 1));

      --marker-color: var(--color-palette-text);
    }

    :host([size='medium']) {
      --marker-width: calc(5% * var(--dial-scale-factor, 1));
      --marker-height: calc(1% * var(--dial-scale-factor, 1));

      --marker-color: var(--color-palette-highlight);
    }

    .markers {
      position: relative;
      width: 100%;
      height: 100%;
    }

    .markers__index {
      position: absolute;
      z-index: 0;
      left: calc(50% + cos(var(--degrees) - 90deg) * 50%);
      top: calc(50% + sin(var(--degrees) - 90deg) * 50%);
      background-color: var(--marker-color);
      width: var(--marker-width);
      height: var(--marker-height);
      transform-origin: center right;
      transform: translate(-100%, -50%) rotate(calc(var(--degrees) - 90deg));
    }
  `,
];
