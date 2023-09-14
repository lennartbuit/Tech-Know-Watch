import {css} from 'lit';

import { reset } from '../../styles';

export default [
  reset,
  css`
    .numerals {
      position: relative;
      width: 100%;
      height: 100%;
    }

    .numerals__index {
      position: absolute;
      left: calc(50% + cos(var(--degrees) - 90deg) * 50%);
      top: calc(50% + sin(var(--degrees) - 90deg) * 50%);

      transform: translate(-50%, -50%);;

      font-size: 1em;
      color: var(--numerals-color, var(--color-palette-text));
    }
  `,
];
