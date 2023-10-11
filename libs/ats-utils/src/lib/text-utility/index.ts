/**
 * Turncate text according to provided length
 *
 * @param text
 * @param length - length default 12
 * @returns
 */
export function turncateText(text: string, length = 12) {
  return `${text.length > length ? `${text.substring(0, length)}...` : text}`;
}

/**
 * Checks given value is string a string or not
 *
 * @param {String | Number} value - The value to check
 * @returns {Boolean}
 */
export function isString(value: string | number) {
  return typeof value === 'string';
}

/**
 * Generates random string using defined char set or using alpha numeric values
 *
 * @param {Number} length - Output string length
 * @param {String} charSet - Define custom char set
 * @returns {Boolean}
 */
export function generateRandomString(length = 5, charSet?: string) {
  charSet =
    charSet || 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let randomString = '';
  for (let i = 0; i < length; i++) {
    const randomPoz = Math.floor(Math.random() * charSet.length);
    randomString += charSet.substring(randomPoz, randomPoz + 1);
  }
  return randomString;
}
