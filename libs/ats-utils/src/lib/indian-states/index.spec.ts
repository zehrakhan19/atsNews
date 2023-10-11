import { getAllIndianStates } from './index';

describe('getAllIndianStates', () => {
  test('returns all Indian states with LABEL_VALUE format by default', () => {
    const result = getAllIndianStates();

    expect(result).toEqual(
      expect.arrayContaining([
        { label: expect.any(String), value: expect.any(String) }
      ])
    );
  });

  test('returns all Indian states with LABEL_VALUE format', () => {
    const returnType = 'LABEL_VALUE';

    const result = getAllIndianStates(returnType);

    expect(result).toEqual(
      expect.arrayContaining([
        { label: expect.any(String), value: expect.any(String) }
      ])
    );
  });

  test('returns all Indian states with SHORT_CODE format', () => {
    const returnType = 'SHORT_CODE';

    const result = getAllIndianStates(returnType);

    expect(result).toEqual(expect.arrayContaining([expect.any(String)]));
  });

  test('returns all Indian states with GST_CODE format', () => {
    const returnType = 'GST_CODE';

    const result = getAllIndianStates(returnType);

    expect(result).toEqual(expect.arrayContaining([expect.any(Number)]));
  });

  test('returns all Indian states with NAME format', () => {
    const returnType = 'NAME';

    const result = getAllIndianStates(returnType);

    expect(result).toEqual(expect.arrayContaining([expect.any(String)]));
  });
});
