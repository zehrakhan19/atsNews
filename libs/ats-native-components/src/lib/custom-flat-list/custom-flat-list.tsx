import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import { FlatListItem } from './flat-list-item/flat-list-item';

interface Parent {
  name?: string;
}

export interface Item {
  id?: string;
  name?: string;
  category?: any;
  image?: string;
  parent?: Parent;
  brand?: any;
  description?: string;
  itemType?: any;
  unit?: string;
  taxRate?: string;
  gstType?: string;
  hsn?: string;
  images?: any;
  tags?: any;
  alias?: string;
  isGlobal?: boolean;
}

interface Props {
  data: Item[];
  actionText?: string;
  actionIcon?: string;
  onActionPress?: (item: Item) => void;
  itemGap?: number;
  hasTag?: boolean;
  isLoading?: boolean;
  onRefresh: () => void;
  onEndReached: () => void;
}

export const CustomFlatList = ({
  data,
  actionIcon,
  onActionPress,
  isLoading = false,
  onRefresh,
  onEndReached
}: Props) => {
  return (
    <View style={{ flex: 1 }}>
      <View>
        <FlatList
          data={data}
          scrollEventThrottle={30}
          refreshing={isLoading}
          onRefresh={() => onRefresh()}
          onEndReached={() => onEndReached()}
          // onEndReached={() => console.log('sdfsfd')}
          onEndReachedThreshold={0.2}
          renderItem={({ item }: any) =>
            FlatListItem({
              item,
              actionIcon,
              onActionPress
            })
          }
          // keyExtractor={(item: any) => item?.id.toString()}
        />
      </View>
    </View>
  );
};

export const ListItemstyles = StyleSheet.create({
  categoryStyles: {
    fontSize: 14,
    marginTop: 5,
    color: 'black'
  },
  leftitemcontainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center'
  },

  selectedDefault: {
    width: '100%',
    backgroundColor: 'transparent',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    borderTopRightRadius: 20,
    borderTopLeftRadius: 40,
    position: 'absolute',
    top: 0,
    zIndex: 1
  },
  defaultTag: {
    backgroundColor: '#305CFA',
    width: 60,
    textAlign: 'center',
    alignItems: 'center',
    borderTopRightRadius: 10
  },
  defaultTagText: {
    color: 'white'
  }
});
