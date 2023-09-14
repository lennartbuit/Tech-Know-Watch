import {css} from 'lit';

import {palette, reset} from '../../styles';

export default [
  reset,
  palette,
  css`
    .pulsometer-scale {
      position: relative;
      inset: 0;
      width: 100%;
      height: 100%;
      font-size: 1em;
    }

    svg {
      text-transform: uppercase;
      color: var(--pulsometer-scale-numeral-color, var(--color-palette-text));
    }

    .pulsometer-scale__numeral {
      position: absolute;
      left: calc(50% + cos(var(--degrees) - 90deg) * 48.5%);
      top: calc(50% + sin(var(--degrees) - 90deg) * 48.5%);
      color: var(--pulsometer-scale-numeral-color, var(--color-palette-text));
      transform: translate(-50%, -50%);
    }

    .pulsometer-scale__marker {
      position: absolute;
      left: calc(50% + cos(var(--degrees) - 90deg) * 45%);
      top: calc(50% + sin(var(--degrees) - 90deg) * 45%);
      background-color: var(
        --pulsometer-scale-marker-color,
        var(--color-palette-highlight)
      );
      width: 1.5%;
      height: 0.25%;
      transform-origin: center right;
      transform: translate(-100%, -50%) rotate(calc(var(--degrees) + 90deg));
    }
  `,
];
