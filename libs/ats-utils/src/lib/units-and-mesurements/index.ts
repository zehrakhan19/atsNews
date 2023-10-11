export { UNIT_CODES, TUNIT_CODES } from './index.const';
import { MEASUREMENTS, UNITS, UnitsAndMeasurementsType } from './index.const';

/**
 * Get all the Units and measurements
 *
 * @param {UnitsAndMeasurementsType} returnType - define the return type
 * @returns {Array} all Indian state structured as per returnType param
 */
export function getUnitAndMeasurements(
  returnType: UnitsAndMeasurementsType = 'LABEL_VALUE'
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
): any {
  if (returnType === 'LABEL_VALUE') {
    return UNITS.map((unit) => ({
      label: unit.name,
      value: unit.code
    }));
  }

  if (returnType === 'CODE') {
    return UNITS.map((unit) => unit.code);
  }

  if (returnType === 'MEASUREMENTS') {
    return MEASUREMENTS;
  }

  if (returnType === 'NAME') {
    return UNITS.map((unit) => unit.name);
  }

  return UNITS;
}
