import {
  ACCOUNT_TYPES_OBJ,
  ACCOUNT_TYPES,
  DEFAULT_COMPANY_ACCOUNT,
  DEFAULT_COMPANY_ACCOUNT_WALK_IN_CUSTOMER,
  Role,
  USER_TYPES
} from '..';

describe('ATS CONSTS for - account', () => {
  it('Match consts to snapshot', () => {
    expect(DEFAULT_COMPANY_ACCOUNT).toMatchSnapshot();
    expect(DEFAULT_COMPANY_ACCOUNT_WALK_IN_CUSTOMER).toMatchSnapshot();
    expect(ACCOUNT_TYPES).toMatchSnapshot();
    expect(ACCOUNT_TYPES_OBJ).toMatchSnapshot();
    expect(Role).toMatchSnapshot();
    expect(USER_TYPES).toMatchSnapshot();
  });
});
