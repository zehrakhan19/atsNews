import { Image, StyleSheet, Text, View } from 'react-native';
import { Divider, List } from 'react-native-paper';
import {
  human,
  iOSUIKit,
  material,
  systemWeights
} from 'react-native-typography';
import Chips from '../../chips/chips';
// import { Item } from '../custom-flat-list/custom-flat-list';

// interface FlatListItemProps {
//   item: Item;
//   actionIcon: any;
//   onActionPress: (item: Item) => void;
// }

export const FlatListItem = ({ item, actionIcon, onActionPress }: any) => {
  const handleActionPress = () => {
    onActionPress(item);
  };

  const showTags = !item.user || !item.user.phone;

  return (
    <>
      <List.Item
        onPress={handleActionPress}
        style={{ backgroundColor: 'white', padding: 10 }}
        title={
          <Text style={[material.body1, iOSUIKit.subheadEmphasized]}>
            {item?.name || item?.itemMetadata?.name}
            {item?.itemMetadata?.name &&
              ` (${item?.variationValue} ${item?.variationLabel})`}
          </Text>
        }
        description={
          <View style={{ flexWrap: 'wrap' }}>
            {item?.user?.phone && (
              <Text style={material.caption}>{item?.user?.phone}</Text>
            )}
            {item?.parent?.name && (
              <Text style={material.caption}>{item?.parent?.name}</Text>
            )}
            {item?.caseQunatity && (
              <Text style={material.caption}>Qty: {item?.caseQunatity}</Text>
            )}
            {showTags && (
              <View
                style={{ flexDirection: 'row', flexWrap: 'wrap', marginTop: 5 }}
              >
                {item?.item?.map((ele: any, idx: number) => (
                  <View
                    key={idx}
                    style={{
                      padding: 2,
                      flexWrap: 'wrap'
                    }}
                  >
                    <Chips
                      label={ele?.variationValue + ' ' + ele?.variationLabel}
                      callback={() => null}
                    />
                  </View>
                ))}
              </View>
            )}
          </View>
        }
        left={() => (
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center'
            }}
          >
            {item?.logo || item?.image ? (
              <View>
                <Image
                  source={{
                    uri:
                      'https://ats.sgp1.cdn.digitaloceanspaces.com/' + item.logo
                  }}
                  style={ListItemstyles.imgStyles}
                />
              </View>
            ) : (
              <View>
                <Image
                  source={{
                    uri: 'https://cdn3.vectorstock.com/i/1000x1000/35/52/placeholder-rgb-color-icon-vector-32173552.jpg'
                  }}
                  style={ListItemstyles.imgStyles}
                />
              </View>
            )}
          </View>
        )}
        right={() => (
          <View>
            {item?.mrp && (
              <Text style={[iOSUIKit.footnoteEmphasized, material.subheading]}>
                ₹ {item.mrp}
              </Text>
            )}
          </View>
        )}
      />
      <Divider />
    </>
  );
};

const ListItemstyles = StyleSheet.create({
  imgStyles: {
    borderWidth: 1,
    width: 60,
    height: 60,
    borderRadius: 60
  }
});
