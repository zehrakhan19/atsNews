import {useState} from 'react';
import {launchImageLibrary} from 'react-native-image-picker';

const initialSate = {
  name: '',
  postDate: new Date(),
  categories: 'Political',
  languages: '',
  breakingNews: true,
  shortArticle: '',
  writeArticle: '',
  metaKeyword: '',
  metaDescription: '',
  // image: '',
};

const categoriesData = [
  {
    fullTitle: 'Political',
    shortTitle: 'PL',
  },
  {
    fullTitle: 'Local',
    shortTitle: 'LL',
  },
  {
    fullTitle: 'Sports',
    shortTitle: 'SP',
  },
];
const languagesData = [
  {
    fullTitle: 'Telugu',
    shortTitle: 'TL',
  },
  {
    fullTitle: 'Hindi',
    shortTitle: 'HN',
  },
  {
    fullTitle: 'English',
    shortTitle: 'ENG',
  },
];
const newsSpecialityData = [
  {
    fullTitle: 'Top News',
    shortTitle: 'TN',
  },
  {
    fullTitle: 'Slider News',
    shortTitle: 'SN',
  },
];

const useAddNews = ({navigation}: any) => {
  const [breakingNews, setBreakingNews] = useState(true);
  const [date, setDate] = useState<Date | null>(new Date());
  const [news, setNews] = useState(initialSate);
  const [category, setCategory] = useState({
    name: `Select your category`,
    bottomSheet: false,
    actionText: '',
  });
  const [language, setLanguage] = useState({
    name: `Select your language`,
    bottomSheet: false,
    actionText: '',
  });
  const [newsSpeciality, setNewsSpeciality] = useState({
    name: `Select your news speciality`,
    bottomSheet: false,
    actionText: '',
  });
  const toggleSwitch = () => {
    setBreakingNews(!breakingNews);
  };

  const handleInputChange = (item: string, value: string) => {
    setNews(prev => ({
      ...prev,
      [item]: value,
    }));
  };

  const handleOpenLibrary = () => {
    const options = {
      storageOptions: {
        path: 'image',
      },
    };

    launchImageLibrary(options, response => {
      if (response.assets[0].fileName !== undefined) {
        // setImageUri(response.assets[0].uri);
        setNews((prev: any) => ({
          ...prev,
          image: response.assets[0].fileName,
        }));
      }
      // }
    });
  };
  return {
    navigation,
    toggleSwitch,
    breakingNews,
    date,
    handleInputChange,
    setDate,
    categoriesData,
    setCategory,
    category,
    language,
    setLanguage,
    languagesData,
    newsSpeciality,
    setNewsSpeciality,
    newsSpecialityData,
    handleOpenLibrary,
    news,
  };
};

export default useAddNews;
