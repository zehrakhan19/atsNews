export type UnitsAndMeasurementsType =
  | 'LABEL_VALUE'
  | 'CODE'
  | 'MEASUREMENTS'
  | 'NAME';

export const MEASUREMENTS = {
  MEASURE: 'Measure',
  VOLUME: 'Volume',
  LENGTH: 'Length',
  WEIGHT: 'Weight',
  AREA: 'Area',
  OTHER: 'Other'
} as const;

export type TMEASUREMENTS = (typeof MEASUREMENTS)[keyof typeof MEASUREMENTS];

export const UNITS = [
  {
    name: 'BAGS',
    mesurment: MEASUREMENTS.MEASURE,
    code: 'BAG'
  },
  {
    name: 'BALE',
    mesurment: MEASUREMENTS.MEASURE,
    code: 'BAL'
  },
  {
    name: 'BUNDLES',
    mesurment: MEASUREMENTS.MEASURE,
    code: 'BDL'
  },
  {
    name: 'BUCKLES',
    mesurment: MEASUREMENTS.MEASURE,
    code: 'BKL'
  },
  {
    name: 'BILLIONS OF UNITS',
    mesurment: MEASUREMENTS.MEASURE,
    code: 'BOU'
  },
  {
    name: 'BOX',
    mesurment: MEASUREMENTS.MEASURE,
    code: 'BOX'
  },
  {
    name: 'BOTTLES',
    mesurment: MEASUREMENTS.MEASURE,
    code: 'BTL'
  },
  {
    name: 'BUNCHES',
    mesurment: MEASUREMENTS.MEASURE,
    code: 'BUN'
  },
  {
    name: 'CANS',
    mesurment: MEASUREMENTS.MEASURE,
    code: 'CAN'
  },
  {
    name: 'CUBIC METER',
    mesurment: MEASUREMENTS.VOLUME,
    code: 'CBM'
  },
  {
    name: 'CUBIC CENTIMETER',
    mesurment: MEASUREMENTS.VOLUME,
    code: 'CCM'
  },
  {
    name: 'CENTIMETER',
    mesurment: MEASUREMENTS.LENGTH,
    code: 'CMS'
  },
  {
    name: 'CARTONS',
    mesurment: MEASUREMENTS.MEASURE,
    code: 'CTN'
  },
  {
    name: 'DOZEN',
    mesurment: MEASUREMENTS.MEASURE,
    code: 'DOZ'
  },
  {
    name: 'DRUM',
    mesurment: MEASUREMENTS.MEASURE,
    code: 'DRM'
  },
  {
    name: 'GREAT GROSS',
    mesurment: MEASUREMENTS.MEASURE,
    code: 'GGR'
  },
  {
    name: 'GRAMS',
    mesurment: MEASUREMENTS.WEIGHT,
    code: 'GMS'
  },
  {
    name: 'GROSS',
    mesurment: MEASUREMENTS.MEASURE,
    code: 'GRS'
  },
  {
    name: 'GROSS YARDS',
    mesurment: MEASUREMENTS.LENGTH,
    code: 'GYD'
  },
  {
    name: 'KILOGRAMS',
    mesurment: MEASUREMENTS.WEIGHT,
    code: 'KGS'
  },
  {
    name: 'KILOLITER',
    mesurment: MEASUREMENTS.VOLUME,
    code: 'KLR'
  },
  {
    name: 'KILOMETRE',
    mesurment: MEASUREMENTS.LENGTH,
    code: 'KME'
  },
  {
    name: 'MILLILITRE',
    mesurment: MEASUREMENTS.VOLUME,
    code: 'MLT'
  },
  {
    name: 'METERS',
    mesurment: MEASUREMENTS.LENGTH,
    code: 'MTR'
  },
  {
    name: 'METRIC TONS',
    mesurment: MEASUREMENTS.WEIGHT,
    code: 'MTS'
  },
  {
    name: 'NUMBERS',
    mesurment: MEASUREMENTS.MEASURE,
    code: 'NOS'
  },
  {
    name: 'PACKS',
    mesurment: MEASUREMENTS.MEASURE,
    code: 'PAC'
  },
  {
    name: 'PIECES',
    mesurment: MEASUREMENTS.MEASURE,
    code: 'PCS'
  },
  {
    name: 'PAIRS',
    mesurment: MEASUREMENTS.MEASURE,
    code: 'PRS'
  },
  {
    name: 'QUINTAL',
    mesurment: MEASUREMENTS.WEIGHT,
    code: 'QTL'
  },
  {
    name: 'ROLLS',
    mesurment: MEASUREMENTS.MEASURE,
    code: 'ROL'
  },
  {
    name: 'SETS',
    mesurment: MEASUREMENTS.MEASURE,
    code: 'SET'
  },
  {
    name: 'SQUARE FEET',
    mesurment: MEASUREMENTS.AREA,
    code: 'SQF'
  },
  {
    name: 'SQUARE METERS',
    mesurment: MEASUREMENTS.AREA,
    code: 'SQM'
  },
  {
    name: 'SQUARE YARDS',
    mesurment: MEASUREMENTS.AREA,
    code: 'SQY'
  },
  {
    name: 'TABLETS',
    mesurment: MEASUREMENTS.MEASURE,
    code: 'TBS'
  },
  {
    name: 'TEN GROSS',
    mesurment: MEASUREMENTS.MEASURE,
    code: 'TGM'
  },
  {
    name: 'THOUSANDS',
    mesurment: MEASUREMENTS.MEASURE,
    code: 'THD'
  },
  {
    name: 'TONNES',
    mesurment: MEASUREMENTS.WEIGHT,
    code: 'TON'
  },
  {
    name: 'TUBES',
    mesurment: MEASUREMENTS.MEASURE,
    code: 'TUB'
  },
  {
    name: 'US GALLONS',
    mesurment: MEASUREMENTS.VOLUME,
    code: 'UGS'
  },
  {
    name: 'UNITS',
    mesurment: MEASUREMENTS.MEASURE,
    code: 'UNT'
  },
  {
    name: 'YARDS',
    mesurment: MEASUREMENTS.LENGTH,
    code: 'YDS'
  },
  {
    name: 'OTHERS',
    mesurment: MEASUREMENTS.OTHER,
    code: 'OTH'
  }
] as const;

export const UNIT_CODES = UNITS.map((i) => i.code);
export type TUNIT_CODES = typeof UNIT_CODES;
