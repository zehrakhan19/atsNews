import { COMPANY_TYPES } from '..';

describe('ATS CONSTS for - company types', () => {
  it('Match consts to snapshot', () => {
    expect(COMPANY_TYPES).toMatchSnapshot();
  });
});
