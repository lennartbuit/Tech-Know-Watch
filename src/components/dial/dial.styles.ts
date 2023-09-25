import {css} from 'lit';
import {palette, reset} from '../../styles';

export default [
  reset,
  palette,
  css`
    :host {
      display: block;
      height: 100%;
      width: 100%;

      font-family: var(--font-family-objectivity);
      font-weight: bold;
    }

    ::slotted(nedap-dial) {
      width: 32.5%;
      height: 32.5%;

      /* Used to make sure tracks/hands/numerals aren't too small */
      --dial-scale-factor: 2;
      --dial-color: var(--subdial-color, var(--color-palette-foreground));

      font-size: 33%;

      font-family: var(--font-family-ibm-plex-sans);
      font-weight: normal;
    }

    ::slotted([slot='markers']) {
      position: absolute;
      width: 100%;
      height: 100%;
    }

    ::slotted([slot='numerals']) {
      position: absolute;
      --inset: calc(12.5% * var(--dial-scale-factor, 1));

      left: var(--inset);
      top: var(--inset);
      width: calc(100% - var(--inset) * 2);
      height: calc(100% - var(--inset) * 2);
    }

    ::slotted([slot='3-o-clock']),
    ::slotted([slot='6-o-clock']),
    ::slotted([slot='9-o-clock']),
    ::slotted([slot='12-o-clock']) {
      position: absolute;
      transform: translate(-50%, -50%);
    }

    ::slotted([slot='3-o-clock']) {
      top: 50%;
      left: 75%;
    }

    ::slotted([slot='6-o-clock']) {
      top: 75%;
      left: 50%;
    }

    ::slotted([slot='9-o-clock']) {
      top: 50%;
      left: 25%;
    }

    ::slotted([slot='12-o-clock']) {
      top: 25%;
      left: 50%;
    }

    .dial {
      border-radius: var(--border-radius-full);
      background-color: var(--dial-color, var(--color-palette-background));
      width: 100%;
      height: 100%;
      position: relative;
    }

    .stem {
      width: max(2.5%, 0.375rem);
      height: max(2.5%, 0.375rem);
      background-color: var(--color-silver-light);
      position: absolute;
      transform-origin: bottom center;
      transform: translate(-50%, 50%);
      border-radius: var(--border-radius-full);
      bottom: 50%;
      left: 50%;
    }
  `,
];
