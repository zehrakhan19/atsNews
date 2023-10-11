export const EMPLOYEE_TYPES_OBJ = {
  EMPLOYEE: 'EMPLOYEE',
  CONTRACTOR: 'CONTRACTOR'
} as const;
export type TEMPLOYEE_TYPES = keyof typeof EMPLOYEE_TYPES_OBJ;
export const EMPLOYEE_TYPES = Object.keys(EMPLOYEE_TYPES_OBJ);
