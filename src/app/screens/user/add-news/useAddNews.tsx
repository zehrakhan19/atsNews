import {useState} from 'react';

const initialSate = {
  name: '',
  postDate: new Date(),
  breakingNews: true,
  shortArticle: '',
  writeArticle: '',
  metaKeyword: '',
  metaDescription: '',
};

const useAddNews = ({navigation}: any) => {
  const [breakingNews, setBreakingNews] = useState(true);
  const [date, setDate] = useState<Date | null>(new Date());
  const [news, setNews] = useState(initialSate);
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
  };
};

export default useAddNews;
