import {css} from 'lit';

import {reset} from '../../styles';

export default [
  reset,
  css`
    :host {
      display: flex;
      height: 100%;
      width: 100%;
    }

    .greeting {
      margin: auto;
      max-width: 50cqw;
      text-wrap: balance;
    }

    .greeting__title {
      font-family: var(--font-family-objectivity);
      font-size: min(7.5cqh, 7.5cqw);
      font-weight: bold;
      line-height: 1.25;
      color: var(--greeting-title-color, var(--color-palette-highlight));
    }

    .greeting__body {
      font-family: var(--font-family-objectivity);
      font-size: min(5cqh, 5cqw);
      font-weight: bold;
      line-height: 1.25;
      color: var(--greeting-body-color, var(--color-palette-text));
    }
  `,
];
