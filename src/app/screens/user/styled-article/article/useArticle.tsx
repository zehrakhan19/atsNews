import {useState} from 'react';

const useArticle = ({style, data, navigation}: any) => {
  return {
    navigation,
    style,
    data,
  };
};

export default useArticle;
