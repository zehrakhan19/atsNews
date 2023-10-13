import {useState} from 'react';

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
    shortTitle: 'HIN',
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
    fullTitle: 'Avg News',
    shortTitle: 'AN',
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
  };
};

export default useAddNews;
