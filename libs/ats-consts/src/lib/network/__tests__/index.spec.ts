import { USER_STATUS, SUCCESS_RESPONSE, ERROR_RESPONSE } from '..';

describe('ATS CONSTS for - network', () => {
  it('Match consts to snapshot', () => {
    expect(USER_STATUS).toMatchSnapshot();
    expect(SUCCESS_RESPONSE).toMatchSnapshot();
    expect(ERROR_RESPONSE).toMatchSnapshot();
  });
});
