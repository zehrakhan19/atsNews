import React, {useState} from 'react';
import {View, Text} from 'react-native';
import {Divider, Appbar as PaperAppbar} from 'react-native-paper';
import {Searchbar} from '../searchbar/searchbar';
import {iOSUIKit} from 'react-native-typography';
export interface AppbarProps {
  backAction?: () => void;
  right?: React.ReactNode;
  title?: string;
  search?: boolean;
  share?: boolean;
  callback?: (query: string) => void;
  showBackAction?: boolean;
}

export function Appbar({
  title,
  backAction,
  search = false,
  share = false,
  right,
  callback = () => null,
  showBackAction = true,
}: AppbarProps) {
  const [isSearch, setIsSearch] = useState(false);
  const handleSearch = (text: any) => {
    callback(text);
  };
  return (
    <View>
      <PaperAppbar.Header style={{backgroundColor: 'white'}}>
        {showBackAction && <PaperAppbar.BackAction onPress={backAction} />}
        <PaperAppbar.Content
          title={
            isSearch ? (
              <Searchbar
                placeholder={`Search ${title}` || 'Search'}
                onTextChange={(text: any) => handleSearch(text)}
                mode="bar"
              />
            ) : (
              <Text style={iOSUIKit.title3Emphasized}>{title}</Text>
            )
          }
        />
        {search && (
          <PaperAppbar.Action
            icon={isSearch ? 'close' : 'magnify'}
            onPress={() => setIsSearch(!isSearch)}
          />
        )}

        {right && right}
      </PaperAppbar.Header>
      <Divider />
    </View>
  );
}

export default Appbar;
