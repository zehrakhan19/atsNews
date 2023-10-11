import { ALL_INDIAN_STATES } from './index.const';
import { IndianStatesReturnType } from './index.interface';

/**
 * Get all the Indian state names in an array
 *
 * @param {IndianStatesReturnType} returnType - define the return type
 * @returns {Array} all Indian state structured as per returnType param
 */
export function getAllIndianStates(
  returnType: IndianStatesReturnType = 'LABEL_VALUE'
) {
  if (returnType === 'LABEL_VALUE') {
    return ALL_INDIAN_STATES.map((state) => ({
      label: state.name,
      value: state.shortCode
    }));
  }

  if (returnType === 'SHORT_CODE') {
    return ALL_INDIAN_STATES.map((state) => state.shortCode);
  }

  if (returnType === 'GST_CODE') {
    return ALL_INDIAN_STATES.map((state) => state.gstCode);
  }

  if (returnType === 'NAME') {
    return ALL_INDIAN_STATES.map((state) => state.name);
  }

  return ALL_INDIAN_STATES;
}
