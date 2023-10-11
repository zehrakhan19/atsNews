import { indianCurrancyFormat } from '.';

describe('indianCurrancyFormat', () => {
  it('should format a number as Indian currency with two decimal places by default', () => {
    const value = 1234567.89;
    const formattedValue = indianCurrancyFormat(value);
    expect(formattedValue).toEqual('₹ 1,234,567.89');
  });

  it('should format a number as Indian currency with the specified currency symbol and precision', () => {
    const value = 9876.54;
    const currencySymbol = 'INR';
    const precision = 3;
    const formattedValue = indianCurrancyFormat(
      value,
      currencySymbol,
      precision
    );
    expect(formattedValue).toEqual('INR 9,876.540');
  });

  it('should format a string representation of a number as Indian currency', () => {
    const value = '9876543.21';
    const formattedValue = indianCurrancyFormat(value);
    expect(formattedValue).toEqual('₹ 9,876,543.21');
  });
});
