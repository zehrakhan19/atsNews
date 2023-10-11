import {
  TRANSACTIONS_TYPES_OBJ,
  TRANSACTIONS_TYPES,
  TRANSACTIONS_STATUS_OBJ,
  TRANSACTIONS_STATUS,
  TRANSACTIONS_METHODS_OBJ,
  TRANSACTIONS_METHODS,
  VOUCHER_TYPES_OBJ,
  VOUCHER_TYPES,
  PURCHASE_TYPES,
  PURCHASE_TYPE_OBJ,
  INVOICE_TYPE_OBJ,
  INVOICE_TYPES
} from '..';

describe('ATS CONSTS for - transactions', () => {
  it('Match consts to snapshot', () => {
    expect(TRANSACTIONS_TYPES_OBJ).toMatchSnapshot();
    expect(TRANSACTIONS_TYPES).toMatchSnapshot();

    expect(TRANSACTIONS_STATUS_OBJ).toMatchSnapshot();
    expect(TRANSACTIONS_STATUS).toMatchSnapshot();

    expect(TRANSACTIONS_METHODS_OBJ).toMatchSnapshot();
    expect(TRANSACTIONS_METHODS).toMatchSnapshot();

    expect(VOUCHER_TYPES_OBJ).toMatchSnapshot();
    expect(VOUCHER_TYPES).toMatchSnapshot();

    expect(PURCHASE_TYPE_OBJ).toMatchSnapshot();
    expect(PURCHASE_TYPES).toMatchSnapshot();

    expect(INVOICE_TYPE_OBJ).toMatchSnapshot();
    expect(INVOICE_TYPES).toMatchSnapshot();
  });
});
