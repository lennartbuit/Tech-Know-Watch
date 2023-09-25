import {css} from 'lit';
import {reset} from '../../styles';

export default [
  reset,
  css`
    :host {
      display: block;
    }

    .pusher {
      all: unset;
      display: block;
      position: relative;
      width: 100%;
      height: 100%;
    }

    .pusher::before {
      content: '';
      display: block;
      position: absolute;
      inset: 0;
      transition: transform 100ms;
      background: linear-gradient(
        var(--color-silver),
        var(--color-white),
        var(--color-silver)
      );
      border-radius: 15% / 50%;
    }

    .pusher:focus-visible::before {
      box-shadow: 0 0 0.25rem 0.25rem var(--color-scientific-blue);
    }

    .pusher:not(:disabled):hover::before {
      transform: translateX(10%);
    }

    .pusher:not(:disabled):active::before {
      transform: translateX(-10%);
    }

    .pusher:disabled {
      cursor: not-allowed;
    }
  `,
];
