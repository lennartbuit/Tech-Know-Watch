import {css} from 'lit';

import {reset} from '../../styles';

export default [
  reset,
  css`
    :host {
      position: relative;
      width: 100%;
      height: 100%;

      display: flex;
      justify-content: center;
      align-items: center;
      font-size: min(7.5cqw, 7.5cqh);

      container-type: size;
    }

    ::slotted(nedap-pusher) {
      position: absolute;
      width: 10%;
      height: 10%;
      left: calc(50% + calc(cos(var(--pusher-rotation)) * 50%));
      top: calc(50% - calc(sin(var(--pusher-rotation)) * 50%));
      transform: translate(-50%, -50%)
        rotate(calc(0deg - var(--pusher-rotation)));
    }

    ::slotted(nedap-pusher[slot='2-o-clock']) {
      --pusher-rotation: 30deg;
    }

    ::slotted(nedap-pusher[slot='4-o-clock']) {
      --pusher-rotation: -30deg;
    }

    ::slotted(nedap-pusher[slot='8-o-clock']) {
      --pusher-rotation: -150deg;
    }

    ::slotted(nedap-pusher[slot='10-o-clock']) {
      --pusher-rotation: 150deg;
    }

    ::slotted([slot='bezel']) {
      position: absolute;
      inset: 0;
      width: 100%;
      height: 100%;

      font-size: 20%;

      font-family: var(--font-family-ibm-plex-sans);
      font-weight: normal;
      --numerals-color: var(--color-heritage-blue);
    }

    .case {
      position: relative;
      height: min(100cqw, 100cqh);
      width: min(100cqw, 100cqh);
    }

    .case__outer-rim,
    .case__bezel,
    .case__inner-rim,
    .case__dial-surface,
    .case__shadow,
    .case__glass {
      height: 100%;
      width: 100%;
      border-radius: var(--border-radius-full);
    }

    .case__outer-rim {
      position: relative;
      padding: 2px;
      background: conic-gradient(
        from -45deg,
        var(--color-white),
        var(--color-silver),
        var(--color-white)
      );
      pointer-events: none;
    }

    .case__bezel {
      position: relative;
      padding: 5%;
      background: conic-gradient(
        from -45deg,
        var(--color-silver-light),
        var(--color-silver),
        var(--color-silver-light)
      );
    }

    .case__inner-rim {
      padding: 2px;

      background: conic-gradient(
        from 135deg,
        var(--color-white),
        var(--color-silver),
        var(--color-white)
      );
    }

    .case__dial-surface {
      background-color: var(--color-silver-light);
      position: relative;
    }

    .case__shadow {
      position: absolute;
      inset: 0;
      z-index: 3;
      background: radial-gradient(
        closest-side at 50.5% 50.5%,
        transparent 100%,
        var(--color-shadow) 102%
      );
    }

    .case__glass {
      position: absolute;
      inset: 0;
      background: linear-gradient(
        -75deg,
        transparent 50%,
        rgba(255, 255, 255, 0.1) 50%,
        rgba(255, 255, 255, 0.25)
      );
    }
  `,
];
