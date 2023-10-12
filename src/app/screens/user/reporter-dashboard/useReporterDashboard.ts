const useReporterDashboard = ({navigation}: any) => {
  const handleNavigateToAddNews = () => {
    navigation.navigate('add-news');
  };
  return {
    navigation,
    handleNavigateToAddNews,
  };
};

export default useReporterDashboard;
