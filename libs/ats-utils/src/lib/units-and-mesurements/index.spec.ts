import { getUnitAndMeasurements } from './index';
import { MEASUREMENTS } from './index.const';

describe('getUnitAndMeasurements', () => {
  test('returns all units and measurements with LABEL_VALUE format by default', () => {
    const result = getUnitAndMeasurements();

    expect(result).toEqual(
      expect.arrayContaining([
        { label: expect.any(String), value: expect.any(String) }
      ])
    );
  });

  test('returns all units and measurements with LABEL_VALUE format', () => {
    const returnType = 'LABEL_VALUE';

    const result = getUnitAndMeasurements(returnType);

    expect(result).toEqual(
      expect.arrayContaining([
        { label: expect.any(String), value: expect.any(String) }
      ])
    );
  });

  test('returns all units and measurements with CODE format', () => {
    const returnType = 'CODE';

    const result = getUnitAndMeasurements(returnType);

    expect(result).toEqual(expect.arrayContaining([expect.any(String)]));
  });

  test('returns all units and measurements with MEASUREMENTS format', () => {
    const returnType = 'MEASUREMENTS';

    const result = getUnitAndMeasurements(returnType);

    expect(result).toEqual(MEASUREMENTS);
  });

  test('returns all units and measurements with NAME format', () => {
    const returnType = 'NAME';

    const result = getUnitAndMeasurements(returnType);

    expect(result).toEqual(expect.arrayContaining([expect.any(String)]));
  });
});
