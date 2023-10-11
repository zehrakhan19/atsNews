/**
 *
 * @param value - the currency value
 * @param currency - currency symbol default ₹
 * @param precision - no. of precision in digit after .
 * @returns
 */
export function indianCurrancyFormat(
  value: number | string,
  currency = '₹',
  precision = 2
) {
  return `${currency} ${parseFloat(value.toString())
    .toFixed(precision)
    .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}`;
}
