import {useState} from 'react';
import {launchImageLibrary} from 'react-native-image-picker';

const useHomeScreen = ({navigation}: any) => {
  const [isOpen, setIsOpen] = useState(false);
  const [imageUri, setImageUri] = useState('');
  const [categoryData, setCategoryData] = useState([
    {
      categoryName: 'Category Name',
      parentCategoryName: 'ParentCategry Name ',
      image: null,
    },
    {
      categoryName: 'Category Name',
      parentCategoryName: 'ParentCategry Name ',
      image: null,
    },
  ]);

  const hanleOpenLibrary = async () => {
    const options = {
      storageOptions: {
        path: 'image',
      },
    };

    launchImageLibrary(options, response => {
      if (response.assets[0].uri !== undefined) {
        // setImageUri(response.assets[0].uri);
        setAddCategory((prev: any) => ({
          ...prev,
          image: response.assets[0].uri,
        }));
      }
      // }
    });
  };
  const initialState = {
    categoryName: '',
    parentCategoryName: '',
    image: '',
  };
  const [addCategory, setAddCategory] = useState(initialState);
  const handleInputChange = (item: string, value: string) => {
    setAddCategory(prev => ({
      ...prev,
      [item]: value,
    }));
    console.log(addCategory);
  };
  const setAddCategoryInitialState = () => {
    setAddCategory(initialState);
  };
  return {
    navigation,
    categoryData,
    isOpen,
    setIsOpen,
    setCategoryData,
    hanleOpenLibrary,
    handleInputChange,
    addCategory,
    setAddCategoryInitialState,
  };
};

export default useHomeScreen;
