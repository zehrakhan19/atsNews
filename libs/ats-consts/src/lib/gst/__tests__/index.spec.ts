import {
  GST_SLABS_OBJ,
  TGST_SLABS,
  GST_SLABS,
  GST_PERCENTAGES,
  TaxApplicableTypes,
  TTaxApplicableTypes,
  GST_STATE_OF_SUPPLY_OBJ,
  GST_STATE_OF_SUPPLY
} from '..';

describe('ATS CONSTS for - gst', () => {
  it('Match consts to snapshot', () => {
    expect(GST_SLABS_OBJ).toMatchSnapshot();

    const NewTGST_SLABS: TGST_SLABS[] = [
      '0',
      '12',
      '18',
      '28',
      '5',
      'EXEMPTED',
      'NILL'
    ];
    expect(NewTGST_SLABS).toMatchSnapshot();

    expect(GST_SLABS).toMatchSnapshot();
    expect(GST_PERCENTAGES).toMatchSnapshot();
    expect(TaxApplicableTypes).toMatchSnapshot();

    const NewTTaxApplicableTypes: TTaxApplicableTypes[] = [
      'EXCLUSIVE',
      'INCLUSIVE'
    ];
    expect(NewTTaxApplicableTypes).toMatchSnapshot();

    expect(GST_STATE_OF_SUPPLY_OBJ).toMatchSnapshot();
    expect(GST_STATE_OF_SUPPLY).toMatchSnapshot();
  });
});
