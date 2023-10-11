import { TRANSACTIONS_STATUS_OBJ } from '@ats-erp/ats-consts';
import { findPaymentStatus } from '.'; // Replace with the actual path

describe('findPaymentStatus', () => {
  // Test case 1: When the paid amount is zero or undefined
  it('should return DUE when paid amount is zero or undefined', () => {
    const amount = 100;
    const paidZero = 0;

    const resultZero = findPaymentStatus(amount, paidZero);

    expect(resultZero).toBe(TRANSACTIONS_STATUS_OBJ.DUE);
  });

  // Test case 2: When the amount is greater than the paid amount
  it('should return PARTIAL when amount is greater than paid', () => {
    const amount = 100;
    const paid = 80;

    const result = findPaymentStatus(amount, paid);

    expect(result).toBe(TRANSACTIONS_STATUS_OBJ.PARTIAL);
  });

  // Test case 3: When the paid amount is greater than or equal to the amount
  it('should return DONE when paid amount is greater than or equal to amount', () => {
    const amount = 100;
    const paidEqual = 100;
    const paidGreater = 150;

    const resultEqual = findPaymentStatus(amount, paidEqual);
    const resultGreater = findPaymentStatus(amount, paidGreater);

    expect(resultEqual).toBe(TRANSACTIONS_STATUS_OBJ.DONE);
    expect(resultGreater).toBe(TRANSACTIONS_STATUS_OBJ.DONE);
  });

  // You can add more test cases for edge cases and boundary conditions
});
