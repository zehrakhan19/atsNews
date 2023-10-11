import {
  COMMON_PERMISSIONS,
  MODULES_PERMISSIONS,
  ADMIN_PERMISSIONS,
  EMPLOYEE_PERMISSIONS,
  CUSTOMER_PERMISSIONS,
  SUPPLIER_PERMISSIONS
} from '..';

describe('ATS CONSTS for - permissions', () => {
  it('Match consts to snapshot', () => {
    expect(COMMON_PERMISSIONS).toMatchSnapshot();
    expect(COMMON_PERMISSIONS('test')).toMatchSnapshot();
    expect(MODULES_PERMISSIONS).toMatchSnapshot();
    expect(ADMIN_PERMISSIONS).toMatchSnapshot();
    expect(EMPLOYEE_PERMISSIONS).toMatchSnapshot();
    expect(CUSTOMER_PERMISSIONS).toMatchSnapshot();
    expect(SUPPLIER_PERMISSIONS).toMatchSnapshot();
  });
});
