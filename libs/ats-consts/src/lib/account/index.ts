export const ACCOUNT_TYPES_OBJ = {
  CUSTOMER: 'CUSTOMER',
  SUPPLIER: 'SUPPLIER',
  EMPLOYEE: 'EMPLOYEE',
  CASH: 'CASH',
  BANK_ACCOUNT: 'BANK_ACCOUNT'
} as const;

export const ACCOUNT_TYPES = Object.values(ACCOUNT_TYPES_OBJ);

export const DEFAULT_COMPANY_ACCOUNT = ACCOUNT_TYPES_OBJ.CASH;
export const DEFAULT_COMPANY_ACCOUNT_WALK_IN_CUSTOMER = 'Walk In Customer';

export const Role = {
  SUPER_ADMIN: 'SUPER_ADMIN',
  ADMIN: 'ADMIN',
  EMPLOYEE: 'EMPLOYEE',
  CUSTOMER: 'CUSTOMER',
  SUPPLIER: 'SUPPLIER'
} as const;

export type TRole = (typeof Role)[keyof typeof Role];

export const USER_TYPES = Object.values(Role);
