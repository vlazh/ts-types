/**
 * Thrown by various accessor methods or partial functions to indicate
 * that the element being requested does not exist.
 */
export default class NoSuchElementError extends Error {
  constructor(message?: string) {
    super(message);
    this.name = NoSuchElementError.name;
    // Workaround to make `instanceof` work in ES5
    this.constructor = NoSuchElementError;
    this['__proto__'] = NoSuchElementError.prototype; // eslint-disable-line no-proto, dot-notation
  }
}