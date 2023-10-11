import { IMAGE_BASE_URL } from '..';

describe('ATS CONSTS for - cloud', () => {
  it('Match consts to snapshot', () => {
    expect(IMAGE_BASE_URL).toMatchSnapshot();
  });
});
