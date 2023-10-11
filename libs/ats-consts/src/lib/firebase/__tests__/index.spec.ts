import { FCM_BASE_URL } from '..';

describe('ATS CONSTS for - firebase', () => {
  it('Match consts to snapshot', () => {
    expect(FCM_BASE_URL).toMatchSnapshot();
  });
});
