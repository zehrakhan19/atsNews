export type AddressTypes =
  | 'FOMATTED_ADDRESS'
  | 'POSTAL_CODE'
  | 'CITY'
  | 'STATE';

export interface GoogleGeocodeAddressComponent {
  long_name: string;
  short_name: string;
  types: Array<string>;
}

export interface GoogleGeocodeData {
  address_components: Array<GoogleGeocodeAddressComponent>;
  formatted_address: string;
  place_id: string;
}

/**
 * Extracts address components from google geo location api.
 *
 * @param data - raw data from google geocode api
 * @param type - address components
 * @returns
 */
export function extractAddressComponentsFromGoogleGeocode(
  data: GoogleGeocodeData,
  type: AddressTypes
) {
  let result = '';

  switch (type) {
    case 'FOMATTED_ADDRESS':
      result = data.formatted_address;
      break;
    case 'STATE':
      result =
        data.address_components.find((i) =>
          i.types.includes('administrative_area_level_1')
        )?.long_name || '';
      break;
    case 'CITY':
      result =
        data.address_components.find((i) => i.types.includes('locality'))
          ?.long_name || '';
      break;
    case 'POSTAL_CODE':
      result =
        data.address_components.find((i) => i.types.includes('postal_code'))
          ?.long_name || '';
      break;
  }

  return result;
}
