export const GST_SLABS_OBJ = {
  EXEMPTED: 'EXEMPTED',
  NILL: 'NILL',
  '0': '0',
  '0.25': '0.25',
  '3': '3',
  '5': '5',
  '12': '12',
  '18': '18',
  '28': '28'
} as const;
export type TGST_SLABS = keyof typeof GST_SLABS_OBJ;
export const GST_SLABS = Object.keys(GST_SLABS_OBJ);

export const GST_PERCENTAGES: Array<{ label: string; value: TGST_SLABS }> = [
  {
    label: 'EXEMPTED',
    value: GST_SLABS_OBJ.EXEMPTED
  },
  {
    label: 'NILL',
    value: GST_SLABS_OBJ.NILL
  },
  {
    label: '0%',
    value: GST_SLABS_OBJ[0]
  },
  {
    label: '0.25%',
    value: GST_SLABS_OBJ[0.25]
  },
  {
    label: '3%',
    value: GST_SLABS_OBJ[3]
  },
  {
    label: '5%',
    value: GST_SLABS_OBJ[5]
  },
  {
    label: '12%',
    value: GST_SLABS_OBJ[12]
  },
  {
    label: '18%',
    value: GST_SLABS_OBJ[18]
  },
  {
    label: '28%',
    value: GST_SLABS_OBJ[28]
  }
];

export const Tax_Applicable_Type_OBJ = {
  INCLUSIVE: 'INCLUSIVE',
  EXCLUSIVE: 'EXCLUSIVE'
} as const;
export const TaxApplicableTypes = Object.keys(Tax_Applicable_Type_OBJ);
export type TTaxApplicableTypes =
  (typeof Tax_Applicable_Type_OBJ)[keyof typeof Tax_Applicable_Type_OBJ];

export const GST_TYPES_OBJ = {
  UNREGISTERED: 'UNREGISTERED',
  REGULAR: 'REGULAR',
  COMPOSITION: 'COMPOSITION'
} as const;
export type TGST_TYPES = keyof typeof GST_TYPES_OBJ;
export const GST_TYPES = Object.keys(GST_TYPES_OBJ);

export interface IGST_BREAK_DOWN_LABEL {
  total: string;
  cgst: string;
  sgst: string;
  igst: string;
  cess: string;
}

export interface IGST_BREAK_DOWN_VALUE {
  total: number;
  cgst: number;
  sgst: number;
  igst: number;
  cess: number;
}

export const GST_STATE_OF_SUPPLY_OBJ = {
  INTRA: 'INTRA',
  INTER: 'INTER'
} as const;
export const GST_STATE_OF_SUPPLY = Object.keys(GST_STATE_OF_SUPPLY_OBJ);
export type TGST_STATE_OF_SUPPLY = keyof typeof GST_STATE_OF_SUPPLY_OBJ;
