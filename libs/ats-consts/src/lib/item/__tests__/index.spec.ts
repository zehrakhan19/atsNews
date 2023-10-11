import {
  TItemTypes,
  GstItemTypes,
  TStockEntryType,
  StockEntryType,
  TDiscountTypes,
  DiscountTypes,
  TVoucherType,
  VoucherTypeObj,
  VoucherType,
  GstItemTypes_OBJ,
  StockEntryType_OBJ,
  DiscountType_OBJ,
  VoucherEntryType
} from '..';

describe('ATS CONSTS for - firebase', () => {
  it('Match consts to snapshot', () => {
    const NewTItemTypes: TItemTypes[] = ['SIMPLE', 'VARIABLE'];
    expect(NewTItemTypes).toMatchSnapshot();

    expect(GstItemTypes).toMatchSnapshot();

    const NewTStockEntryType: TStockEntryType[] = ['IN', 'OUT'];
    expect(NewTStockEntryType).toMatchSnapshot();

    expect(StockEntryType).toMatchSnapshot();

    const NewTDiscountTypes: TDiscountTypes[] = ['FLAT', 'PERCENTAGE'];
    expect(NewTDiscountTypes).toMatchSnapshot();

    expect(DiscountTypes).toMatchSnapshot();

    const NewTVoucherType: TVoucherType[] = [
      'OPENING_STOCK',
      'PURCHASE',
      'PURCHASE_RETURN',
      'SALES',
      'SALES_RETURN',
      'STOCK_TRANSFER'
    ];
    expect(NewTVoucherType).toMatchSnapshot();

    expect(VoucherTypeObj).toMatchSnapshot();
    expect(VoucherType).toMatchSnapshot();

    expect(GstItemTypes_OBJ).toMatchSnapshot();
    expect(StockEntryType_OBJ).toMatchSnapshot();
    expect(DiscountType_OBJ).toMatchSnapshot();
    expect(VoucherEntryType).toMatchSnapshot();
  });
});
