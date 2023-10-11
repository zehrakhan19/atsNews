import { DEFAULT_ACCOUNT_GROUPS } from '..';

describe('ATS CONSTS for - account group', () => {
  it('Match consts to snapshot', () => {
    expect(DEFAULT_ACCOUNT_GROUPS).toMatchSnapshot();
  });
});
