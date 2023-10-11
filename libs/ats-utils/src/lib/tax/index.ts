import {
  GST_STATE_OF_SUPPLY_OBJ,
  IGST_BREAK_DOWN_LABEL,
  IGST_BREAK_DOWN_VALUE,
  TGST_SLABS,
  TGST_STATE_OF_SUPPLY
} from '@ats-erp/ats-consts';
import { roundOff } from '../number-utility';

/**
 * Parse the tax rate into number format
 *
 * @param taxRate - Tax rate string
 * @returns formatted tax rate into number
 */
export function parseTaxRate(taxRate: TGST_SLABS) {
  let rate = taxRate;

  if (taxRate === 'EXEMPTED' || taxRate === 'NILL') {
    rate = '0';
  }

  return parseFloat(rate);
}

/**
 * Calculate the taxable amount from the given total amount
 *
 * @param price - the amount that includes the tax also
 * @param taxRate - the tax rate that is included in the price
 * @returns - taxable value
 */
export function calculateTaxableValue(
  price: number,
  taxRate: TGST_SLABS
): number {
  const rate = parseTaxRate(taxRate);

  const tax = (price * rate) / (price + rate);

  const taxableValue = price - tax;

  return roundOff(taxableValue.toString());
}

/**
 * Calculate the tax from the given taxable value
 *
 * @param taxableValue - taxable value that does not includes tax
 * @param taxRate - the tax rate applicable
 * @returns - the tax amount
 */
export function calculateTax(
  taxableValue: number,
  taxRate: TGST_SLABS
): number {
  const rate = parseTaxRate(taxRate);

  const tax = (taxableValue * rate) / 100;

  return roundOff(tax.toString());
}

export function determineStateOfSupply(
  companyState: string,
  partyState: string
) {
  if (companyState === partyState) {
    return GST_STATE_OF_SUPPLY_OBJ.INTRA;
  }
  return GST_STATE_OF_SUPPLY_OBJ.INTER;
}

export function getGstBreakdownLabelFromRate(
  taxRate: TGST_SLABS,
  stateOfSupply: TGST_STATE_OF_SUPPLY
): IGST_BREAK_DOWN_LABEL {
  const rate = parseTaxRate(taxRate);

  const local = stateOfSupply === GST_STATE_OF_SUPPLY_OBJ.INTRA;

  return {
    total: rate.toString(),
    cgst: local ? (rate / 2).toString() : '0',
    sgst: local ? (rate / 2).toString() : '0',
    igst: local ? '0' : rate.toString(),
    cess: '0'
  };
}

export function getGstBreakdownValueFromTax(
  tax: number,
  stateOfSupply: TGST_STATE_OF_SUPPLY
): IGST_BREAK_DOWN_VALUE {
  const local = stateOfSupply === GST_STATE_OF_SUPPLY_OBJ.INTRA;
  return {
    total: roundOff(tax),
    cgst: local ? roundOff((tax / 2).toString()) : 0,
    sgst: local ? roundOff((tax / 2).toString()) : 0,
    igst: local ? 0 : roundOff(tax),
    cess: 0
  };
}

export const doTotalCalculations = (
  items: {
    price: number;
    quantity: number;
    discount: number;
    itemId: string;
  }[],
  itemDatas: {
    id: string;
    itemMetadata: {
      taxRate: any;
    };
  }[],
  stateOfSupply: TGST_STATE_OF_SUPPLY
) => {
  let totalQuantity = 0;
  let subTotalAmount = 0;
  let totalTaxableAmount = 0;
  let totalDiscount = 0;
  let totalTax = 0;

  items.map((i) => {
    let discountValue = 0;
    const tSubTotalAmount = i.price * i.quantity; // EXCLUSIVE
    let tTaxableAmount = tSubTotalAmount;

    if (i.discount) {
      discountValue = roundOff((tSubTotalAmount * i.discount) / 100);
      tTaxableAmount = tSubTotalAmount - discountValue;
    }

    const itemDetails = itemDatas.find(
      (item: { id: string }) => item.id === i.itemId
    );
    const tTax = calculateTax(
      tTaxableAmount,
      itemDetails?.itemMetadata?.taxRate
    );

    totalQuantity += i.quantity;
    subTotalAmount += tSubTotalAmount;
    totalTaxableAmount += tTaxableAmount;
    totalTax += tTax;
    totalDiscount += discountValue;
  });

  return {
    totalQuantity,
    subTotalAmount,
    totalDiscount,
    totalTaxableAmount,
    totalTax,
    taxBreakdowns: getGstBreakdownValueFromTax(totalTax, stateOfSupply)
  };
};
