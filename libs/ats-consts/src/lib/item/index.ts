export const GstItemTypes_OBJ = {
  SIMPLE: 'SIMPLE',
  VARIABLE: 'VARIABLE'
} as const;
export const GstItemTypes = Object.keys(GstItemTypes_OBJ);
export type TItemTypes =
  (typeof GstItemTypes_OBJ)[keyof typeof GstItemTypes_OBJ];

export const StockEntryType_OBJ = {
  IN: 'IN',
  OUT: 'OUT'
} as const;
export const StockEntryType = Object.keys(StockEntryType_OBJ);
export type TStockEntryType =
  (typeof StockEntryType_OBJ)[keyof typeof StockEntryType_OBJ];

export const DiscountType_OBJ = {
  PERCENTAGE: 'PERCENTAGE',
  FLAT: 'FLAT'
} as const;
export const DiscountTypes = Object.keys(DiscountType_OBJ);
export type TDiscountTypes =
  (typeof DiscountType_OBJ)[keyof typeof DiscountType_OBJ];

export const VoucherTypeObj = {
  OPENING_STOCK: 'OPENING_STOCK',
  SALES: 'SALES',
  PURCHASE: 'PURCHASE',
  STOCK_TRANSFER: 'STOCK_TRANSFER',
  SALES_RETURN: 'SALES_RETURN',
  PURCHASE_RETURN: 'PURCHASE_RETURN'
} as const;
export type TVoucherType = (typeof VoucherTypeObj)[keyof typeof VoucherTypeObj];
export const VoucherType = Object.values(VoucherTypeObj);

export const VoucherEntryType: Record<TVoucherType, TStockEntryType> = {
  OPENING_STOCK: StockEntryType_OBJ.IN,
  SALES: StockEntryType_OBJ.OUT,
  PURCHASE: StockEntryType_OBJ.IN,
  STOCK_TRANSFER: StockEntryType_OBJ.OUT,
  SALES_RETURN: StockEntryType_OBJ.IN,
  PURCHASE_RETURN: StockEntryType_OBJ.OUT
} as const;
