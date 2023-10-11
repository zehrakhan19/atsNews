/**
 * Generate random number
 *
 * @param length - length default 5
 * @returns
 */
export function generateRandomNumber(length = 5) {
  return (
    Math.floor(Math.random() * Number(`9${'0'.repeat(length - 1)}`)) +
    Number(`1${'0'.repeat(length - 1)}`)
  );
}

/**
 * Round off the given number to 2 decimal places.
 *
 * @param {String} value - The value to round off
 * @returns {Number} - The rounded off value float
 */
export const roundOff = (value: number | string) => {
  return Math.round(parseFloat(value.toString()) * 100) / 100;
};

/**
 * Checks given value is number a number or not
 *
 * @param {String | Number} value - The value to check
 * @returns {Boolean}
 */
export function isNumber(value: string | number) {
  return typeof value === 'number';
}
