import {
  GoogleGeocodeData,
  extractAddressComponentsFromGoogleGeocode
} from '.';

describe('extractAddressComponentsFromGoogleGeocode', () => {
  const data: GoogleGeocodeData = {
    address_components: [
      {
        long_name: '1600',
        short_name: '1600',
        types: ['street_number']
      },
      {
        long_name: 'Amphitheatre Parkway',
        short_name: 'Amphitheatre Pkwy',
        types: ['route']
      },
      {
        long_name: 'Mountain View',
        short_name: 'Mountain View',
        types: ['locality', 'political']
      },
      {
        long_name: 'Santa Clara County',
        short_name: 'Santa Clara County',
        types: ['administrative_area_level_2', 'political']
      },
      {
        long_name: 'California',
        short_name: 'CA',
        types: ['administrative_area_level_1', 'political']
      },
      {
        long_name: 'United States',
        short_name: 'US',
        types: ['country', 'political']
      },
      {
        long_name: '94043',
        short_name: '94043',
        types: ['postal_code']
      }
    ],
    formatted_address:
      '1600 Amphitheatre Parkway, Mountain View, CA 94043, USA',
    place_id: 'ChIJ2eUgeAK6j4ARbn5u_wAGqWA'
  };

  it('should extract formatted address', () => {
    const result = extractAddressComponentsFromGoogleGeocode(
      data,
      'FOMATTED_ADDRESS'
    );
    expect(result).toEqual(
      '1600 Amphitheatre Parkway, Mountain View, CA 94043, USA'
    );
  });

  it('should extract state', () => {
    const result = extractAddressComponentsFromGoogleGeocode(data, 'STATE');
    expect(result).toEqual('California');
  });

  it('should extract city', () => {
    const result = extractAddressComponentsFromGoogleGeocode(data, 'CITY');
    expect(result).toEqual('Mountain View');
  });

  it('should extract postal code', () => {
    const result = extractAddressComponentsFromGoogleGeocode(
      data,
      'POSTAL_CODE'
    );
    expect(result).toEqual('94043');
  });
});
