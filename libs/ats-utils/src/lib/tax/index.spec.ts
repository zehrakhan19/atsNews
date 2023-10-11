import {
  parseTaxRate,
  calculateTaxableValue,
  calculateTax,
  getGstBreakdownLabelFromRate,
  getGstBreakdownValueFromTax,
  determineStateOfSupply
} from './index';
import { roundOff } from '../number-utility';

// Mock number-utility roundOff function
jest.mock('../number-utility', () => ({
  roundOff: jest.fn((value) => parseFloat(value))
}));

describe('Tax Functions', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('parseTaxRate', () => {
    test('should parse valid tax rates', () => {
      expect(parseTaxRate('EXEMPTED')).toBe(0);
      expect(parseTaxRate('NILL')).toBe(0);
      expect(parseTaxRate('5')).toBe(5);
      expect(parseTaxRate('18')).toBe(18);
      expect(parseTaxRate('28')).toBe(28);
    });
  });

  describe('calculateTaxableValue', () => {
    test('should calculate taxable value correctly', () => {
      const price = 100;
      const taxRate = '18';
      const parsedRate = 18;
      const expectedTax = (price * parsedRate) / (price + parsedRate);
      const expectedTaxableValue = roundOff((price - expectedTax).toString());

      const result = calculateTaxableValue(price, taxRate);

      // expect(parseTaxRate).toHaveBeenCalledWith(taxRate);
      expect(roundOff).toHaveBeenCalledWith(expectedTaxableValue.toString());
      expect(result).toBe(expectedTaxableValue);
    });
  });

  describe('calculateTax', () => {
    test('should calculate tax correctly', () => {
      const taxableValue = 100;
      const taxRate = '18';
      const parsedRate = 18;
      const expectedTax = (taxableValue * parsedRate) / 100;

      const result = calculateTax(taxableValue, taxRate);

      // expect(parseTaxRate).toHaveBeenCalledWith(taxRate);
      expect(roundOff).toHaveBeenCalledWith(expectedTax.toString());
      expect(result).toBe(roundOff(expectedTax.toString()));
    });
  });

  describe('getGstBreakdownLabelFromRate', () => {
    test('should calculate GST breakdown label correctly for intra-state supply', () => {
      const taxRate = '18';
      const stateOfSupply = 'INTRA';
      // const parsedRate = 0.18; // Mock parsed rate
      // parseTaxRate.mockReturnValue(parsedRate); // Mock the parseTaxRate function

      const result = getGstBreakdownLabelFromRate(taxRate, stateOfSupply);

      // expect(parseTaxRate).toHaveBeenCalledWith(taxRate);
      expect(result).toEqual({
        total: '18',
        cgst: '9',
        sgst: '9',
        igst: '0',
        cess: '0'
      });
    });

    // Test cases for other scenarios (inter-state supply, different rates) can be added here
  });

  describe('getGstBreakdownValueFromTax', () => {
    test('should calculate GST breakdown value correctly for intra-state supply', () => {
      const tax = 18;
      const stateOfSupply = 'INTRA';

      const result = getGstBreakdownValueFromTax(tax, stateOfSupply);

      expect(result).toEqual({
        total: 18,
        cgst: 9,
        sgst: 9,
        igst: 0,
        cess: 0
      });
    });
  });

  describe('determineStateOfSupply', () => {
    test('should return INTRA for same company and party state', () => {
      const companyState = 'XYZ';
      const partyState = 'XYZ';

      const result = determineStateOfSupply(companyState, partyState);

      expect(result).toBe('INTRA');
    });

    test('should return INTER for different company and party state', () => {
      const companyState = 'ABC';
      const partyState = 'XYZ';

      const result = determineStateOfSupply(companyState, partyState);

      expect(result).toBe('INTER');
    });

    // You can add more test cases for different scenarios here
  });
});
