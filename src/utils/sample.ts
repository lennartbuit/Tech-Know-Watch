export const sample = <T>(array: Readonly<Array<T>>): T =>
  array[Math.floor(Math.random() * array.length)];
