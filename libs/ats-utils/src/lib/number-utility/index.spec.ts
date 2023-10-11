import { roundOff, generateRandomNumber } from '.';

describe('generateRandomNumber', () => {
  it('should generate a random number with the specified length', () => {
    const length = 5;
    const randomNumber = generateRandomNumber(length);
    expect(randomNumber.toString().length).toEqual(length);
  });

  it('should generate a different number each time it is called', () => {
    const randomNumber1 = generateRandomNumber();
    const randomNumber2 = generateRandomNumber();
    expect(randomNumber1).not.toEqual(randomNumber2);
  });

  it('should generate a number between 10000 and 99999', () => {
    const randomNumber = generateRandomNumber();
    expect(randomNumber).toBeGreaterThanOrEqual(10000);
    expect(randomNumber).toBeLessThanOrEqual(99999);
  });
});

describe('roundOff', () => {
  it('should round off a given value to 2 decimal places', () => {
    expect(roundOff('2.345')).toBe(2.35);
    expect(roundOff('5.678')).toBe(5.68);
    expect(roundOff('0.123')).toBe(0.12);
    expect(roundOff('-1.234')).toBe(-1.23);
  });

  it('should return NaN if the input is not a valid number string', () => {
    expect(roundOff('not a number')).toBeNaN();
    expect(roundOff('')).toBeNaN();
  });
});
