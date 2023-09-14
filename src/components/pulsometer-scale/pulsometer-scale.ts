import {LitElement, html, svg} from 'lit';
import {customElement, property} from 'lit/decorators.js';
import {map} from 'lit/directives/map.js';
import {styleMap} from 'lit/directives/style-map.js';
import {range} from 'lit/directives/range.js';

import {Palette} from '../../styles';

import styles from './pulsometer-scale.styles';

const degreesToRadians = (degrees: number) => (degrees * Math.PI) / 180;

/**
 * @summary Puslometer scales indicate heartbeat per minute
 *
 * @cssproperty --pulsometer-scale-numeral-color - Color of numerals on the pulsometer scale.
 * @cssproperty --pulsometer-scale-marker-color - Color of markers on the pulsometer scale.
 */
@customElement('nedap-pulsometer-scale')
export class NedapPulsometerScale extends LitElement {
  static override styles = styles;

  /** The palette for this backdrop. */
  @property({type: String, reflect: true}) palette: Palette = 'white';

  /** The number of pulses to count before reading the scale */
  @property({type: Number}) grade: 15 | 30 = 15;

  get numeralSteps() {
    switch (this.grade) {
      case 15:
        return [...range(20, 50, 5), ...range(50, 110, 10), 110, 125, 150, 200];
      case 30:
        return [
          ...range(40, 90, 5),
          ...range(90, 120, 10),
          ...range(120, 160, 20),
          160,
          200,
        ];
    }
  }

  get markerSteps() {
    switch (this.grade) {
      case 15:
        return [
          ...range(20, 60, 1),
          ...range(60, 100, 5),
          100,
          110,
          125,
          150,
          200,
        ];
      case 30:
        return [
          ...range(40, 65, 1),
          ...range(65, 100, 5),
          ...range(100, 200, 10),
          200,
        ];
    }
  }

  bpmToDegrees(bpm: number) {
    return (360 * this.grade) / bpm;
  }

  get textPath() {
    const center = 50;
    const distance = 47.5;

    const startDegrees = Math.max(
      ...this.numeralSteps.map(this.bpmToDegrees.bind(this))
    );
    const endDegrees = Math.min(
      ...this.numeralSteps.map(this.bpmToDegrees.bind(this))
    );

    const startX =
      center + Math.cos(degreesToRadians(startDegrees - 90)) * distance;
    const startY =
      center + Math.sin(degreesToRadians(startDegrees - 90)) * distance;

    const endX =
      center + Math.cos(degreesToRadians(endDegrees - 90)) * distance;
    const endY =
      center + Math.sin(degreesToRadians(endDegrees - 90)) * distance;

    return `M ${startX} ${startY} A ${distance} ${distance} 0 0 1 ${endX} ${endY}`;
  }

  renderText() {
    return svg`
        <svg width="100%" height="100%" viewBox="0 0 100 100">
          <defs>
            <path id="text-path" d="${this.textPath}" />
          </defs>

          <text font-size="3" font-weight="500" fill="currentColor">
            <textPath
              href="#text-path"
              startOffset="50%"
              dominant-baseline="middle"
              text-anchor="middle"
            >
              Pulsometer &centerdot; scale for ${this.grade} beats
            </textPath>
          </text>
        </svg>
    `;
  }

  override render() {
    return html`
      <div class="pulsometer-scale">
        ${this.renderText()}
        ${map(this.numeralSteps, (bpm) => {
          return html`
            <div
              class="pulsometer-scale__numeral"
              style=${styleMap({'--degrees': `${this.bpmToDegrees(bpm)}deg`})}
            >
              ${bpm}
            </div>
          `;
        })}
        ${map(this.markerSteps, (bpm) => {
          return html`
            <div
              class="pulsometer-scale__marker"
              style=${styleMap({'--degrees': `${this.bpmToDegrees(bpm)}deg`})}
            ></div>
          `;
        })}
      </div>
    `;
  }
}
