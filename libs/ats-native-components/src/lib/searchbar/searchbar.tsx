import React from 'react';

import { Searchbar as PaperSearchbar } from 'react-native-paper';

/* eslint-disable-next-line */
export interface SearchbarProps {
  placeholder?: string;
  onTextChange: (query: string) => void;
  autoFocus?: boolean;
  mode?: 'view' | 'bar';
  showDivider?: boolean;
}

export function Searchbar({
  placeholder = '',
  onTextChange,
  autoFocus = true,
  mode = 'view',
  showDivider = true
}: SearchbarProps) {
  const [searchQuery, setSearchQuery] = React.useState('');

  const onChangeSearch = (query: string) => {
    setSearchQuery(query);
    onTextChange(query);
  };

  return (
    <PaperSearchbar
      placeholder={placeholder}
      onChangeText={(query: string) => onChangeSearch(query)}
      value={searchQuery}
      style={{ borderRadius: 0, backgroundColor: 'white' }}
      mode={mode}
      showDivider={showDivider}
      autoFocus={autoFocus}
      right={() => null}
    />
  );
}

export default Searchbar;
