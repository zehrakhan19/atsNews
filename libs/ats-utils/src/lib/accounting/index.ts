import { TRANSACTIONS_STATUS_OBJ } from '@ats-erp/ats-consts';

/**
 *
 * @param amount - the bill amount to pay
 * @param paid - the amount paid
 * @returns status
 */
export function findPaymentStatus(amount: number, paid: number) {
  if (!paid || paid === 0) {
    return TRANSACTIONS_STATUS_OBJ.DUE;
  }

  if (amount > paid) {
    return TRANSACTIONS_STATUS_OBJ.PARTIAL;
  }

  return TRANSACTIONS_STATUS_OBJ.DONE;
}
