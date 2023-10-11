import { EMPLOYEE_TYPES_OBJ } from '..';

describe('ATS CONSTS for - hrm', () => {
  it('Match consts to snapshot', () => {
    expect(EMPLOYEE_TYPES_OBJ).toMatchSnapshot();
  });
});
