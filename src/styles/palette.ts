import {css} from 'lit';

export const Palette = [
  'heritage',
  'spark',
  'scientific-highlight',
  'white',
  'people-highlight',
  'intuitive-highlight',
  'spark-highlight',
  'people',
  'scientific',
  'artful',
  'intuitive',
  'elegance',
] as const;

export type Palette = (typeof Palette)[number];

export const palette = css`
  :host([palette='heritage']) {
    --color-palette-foreground: var(--color-heritage-blue);
    --color-palette-background: var(--color-heritage-muted);
    --color-palette-text: var(--color-white);
    --color-palette-highlight: var(--color-spark-orange);

    --color-palette-logo-text: var(--color-white);
    --color-palette-logo-spark: var(--color-spark-orange);
  }

  :host([palette='spark']) {
    --color-palette-background: var(--color-spark-orange);
    --color-palette-foreground: var(--color-spark-muted);
    --color-palette-text: var(--color-white);
    --color-palette-highlight: var(--color-heritage-blue);

    --color-palette-logo-text: var(--color-white);
    --color-palette-logo-spark: var(--color-white);
  }

  :host([palette='scientific-highlight']) {
    --color-palette-background: var(--color-scientific-highlight);
    --color-palette-foreground: var(--color-scientific-light);
    --color-palette-text: var(--color-heritage-blue);
    --color-palette-highlight: var(--color-spark-orange);

    --color-palette-logo-text: var(--color-heritage-blue);
    --color-palette-logo-spark: var(--color-spark-orange);
  }

  :host([palette='white']) {
    --color-palette-background: var(--color-white);
    --color-palette-foreground: var(--color-heritage-highlight);
    --color-palette-text: var(--color-heritage-blue);
    --color-palette-highlight: var(--color-spark-orange);

    --color-palette-logo-text: var(--color-heritage-blue);
    --color-palette-logo-spark: var(--color-spark-orange);
  }

  :host([palette='people-highlight']) {
    --color-palette-background: var(--color-people-highlight);
    --color-palette-foreground: var(--color-people-light);
    --color-palette-text: var(--color-heritage-blue);
    --color-palette-highlight: var(--color-spark-orange);

    --color-palette-logo-text: var(--color-heritage-blue);
    --color-palette-logo-spark: var(--color-spark-orange);
  }

  :host([palette='intuitive-highlight']) {
    --color-palette-background: var(--color-intuitive-highlight);
    --color-palette-foreground: var(--color-intuitive-light);
    --color-palette-text: var(--color-heritage-blue);
    --color-palette-highlight: var(--color-intuitive-green);

    --color-palette-logo-text: var(--color-heritage-blue);
    --color-palette-logo-spark: var(--color-spark-orange);
  }

  :host([palette='spark-highlight']) {
    --color-palette-background: var(--color-spark-highlight);
    --color-palette-foreground: var(--color-spark-light);
    --color-palette-text: var(--color-heritage-blue);
    --color-palette-highlight: var(--color-spark-orange);

    --color-palette-logo-text: var(--color-heritage-blue);
    --color-palette-logo-spark: var(--color-spark-orange);
  }

  :host([palette='people']) {
    --color-palette-background: var(--color-people-yellow);
    --color-palette-foreground: var(--color-people-muted);
    --color-palette-text: var(--color-white);
    --color-palette-highlight: var(--color-people-highlight);

    --color-palette-logo-text: var(--color-white);
    --color-palette-logo-spark: var(--color-spark-orange);
  }

  :host([palette='scientific']) {
    --color-palette-background: var(--color-scientific-blue);
    --color-palette-foreground: var(--color-scientific-muted);
    --color-palette-text: var(--color-white);
    --color-palette-highlight: var(--color-scientific-light);

    --color-palette-logo-text: var(--color-white);
    --color-palette-logo-spark: var(--color-spark-orange);
  }

  :host([palette='artful']) {
    --color-palette-background: var(--color-artful-red);
    --color-palette-foreground: var(--color-artful-muted);
    --color-palette-text: var(--color-white);
    --color-palette-highlight: var(--color-artful-highlight);

    --color-palette-logo-text: var(--color-white);
    --color-palette-logo-spark: var(--color-spark-orange);
  }

  :host([palette='intuitive']) {
    --color-palette-background: var(--color-intuitive-green);
    --color-palette-foreground: var(--color-intuitive-muted);
    --color-palette-text: var(--color-white);
    --color-palette-highlight: var(--color-intuitive-highlight);

    --color-palette-logo-text: var(--color-white);
    --color-palette-logo-spark: var(--color-spark-orange);
  }

  :host([palette='elegance']) {
    --color-palette-background: var(--color-elegance-purple);
    --color-palette-foreground: var(--color-elegance-muted);
    --color-palette-text: var(--color-white);
    --color-palette-highlight: var(--color-elegance-highlight);

    --color-palette-logo-text: var(--color-white);
    --color-palette-logo-spark: var(--color-spark-orange);
  }
`;
