import {css} from 'lit';

import { reset } from '../../styles';

export default [
  reset,
  css`
    :host {
      display: block;
      height: 100%;
      width: 100%;
      position: absolute;
    }

    .hand {
      height: 100%;
      width: 100%;
      transform: rotate(var(--rotation, 0deg));
      filter: drop-shadow(0 0 0.25rem var(--color-shadow));
    }

    .hand__bar {
      position: absolute;
      transform: translateX(-50%);
      top: 5%;
      left: 50%;
      width: 0.25rem;
      border-radius: var(--border-radius-full);
    }

    .hand__center {
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      width: calc(5% * var(--dial-scale-factor, 1));
      height: calc(5% * var(--dial-scale-factor, 1));
      background-color: var(--color-heritage-blue);
      border-radius: var(--border-radius-full);
    }

    /* Not fully BEM, sue me */
    .hand--seconds .hand__bar {
      top: 2.5%;
      height: 55%;
      width: max(1%, 0.25rem);
      width: calc(1% * var(--dial-scale-factor, 1));
      background-color: var(--hand-color, var(--color-palette-highlight));
    }

    .hand--seconds .hand__center {
      background-color: var(--hand-color, var(--color-palette-highlight));
    }

    .hand--minutes .hand__bar {
      top: 10%;
      height: 40%;
      width: calc(2.5% * var(--dial-scale-factor, 1));
      background-color: var(--hand-color, var(--color-palette-text));
    }

    .hand--minutes .hand__center {
      background-color: var(--hand-color, var(--color-palette-text));
    }

    .hand--hours .hand__bar {
      top: 20%;
      height: 30%;
      width: calc(2.5% * var(--dial-scale-factor, 1));
      background-color: var(--hand-color, var(--color-palette-text));
    }

    .hand--hours .hand__center {
      background-color: var(--hand-color, var(--color-palette-text));
    }
  `,
];
