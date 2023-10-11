import { ENVIRONMENTS } from '..';

describe('ATS CONSTS for - environments', () => {
  it('Match consts to snapshot', () => {
    expect(ENVIRONMENTS).toMatchSnapshot();
  });
});
