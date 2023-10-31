import {useState} from 'react';

const useViewNews = ({navigation}: any) => {
  const [publishedStatus, setPublishedStatus] = useState(false);
  const [currentId, setCurrentId] = useState(0);

  const [newsData, setNewsData] = useState([
    {
      id: 0,
      heading:
        'కృష్ణా నీటి పంపకాలపై సుప్రీంకు జగన్ సర్కార్-ఢిల్లీలో  ట్రైబ్యునల్ విచారణ వేళ..!',
      description:
        'కృష్ణా నదీ జలాల పంపకాల వ్యవహారం ఎన్నికల వేళ కాక రేపుతోంది. తెలంగాణ ఎన్నికల్ని దృష్టిలో ఉంచుకుని కృష్ణానదీ జలాల పునఃపంపకం వ్యవహారాన్నికెలికిన కేంద్రం.. బ్రిజేష్ కుమార్ ట్రైబ్యునల్కు మరిన్ని పరిశీలనాంశాల్ని కేటాయించింది. దీంతో వాటిపై ముందడుగు వేసేందుకు ఇవాళ కృష్ణా ట్రైబ్యునల్ ఢిల్లీలో సమావేశమవుతోంది. ఈ నేపథ్యంలో ఒత్తిడి పెంచేందుకు ఏపీ ప్రభుత్వం సుప్రీంకోర్టును ఆశ్రయించింది.',
      isPublished: false,
      onPress: () => {
        setPublishedStatus(true);
        setCurrentId(0);
      },
    },
    {
      id: 1,
      heading:
        'కృష్ణా నీటి పంపకాలపై సుప్రీంకు జగన్ సర్కార్-ఢిల్లీలో ట్రైబ్యునల్ విచారణ వేళ..!',
      description:
        'కృష్ణా నదీ జలాల పంపకాల వ్యవహారం ఎన్నికల వేళ కాక రేపుతోంది. తెలంగాణ ఎన్నికల్ని దృష్టిలో ఉంచుకుని కృష్ణానదీ జలాల పునఃపంపకం వ్యవహారాన్నికెలికిన కేంద్రం.. బ్రిజేష్ కుమార్ ట్రైబ్యునల్కు మరిన్ని పరిశీలనాంశాల్ని కేటాయించింది. దీంతో వాటిపై ముందడుగు వేసేందుకు ఇవాళ కృష్ణా ట్రైబ్యునల్ ఢిల్లీలో సమావేశమవుతోంది. ఈ నేపథ్యంలో ఒత్తిడి పెంచేందుకు ఏపీ ప్రభుత్వం సుప్రీంకోర్టును ఆశ్రయించింది.',
      isPublished: true,
      onPress: () => {
        setPublishedStatus(true);
        setCurrentId(1);
      },
    },
  ]);
  const handleChangeStatus = (state: string) => {
    const updatedData = [...newsData].map(option => {
      if (option.id === currentId) {
        return {...option, isPublished: state === 'Unpublished' ? false : true};
      }
      return {...option};
    });
    setNewsData(updatedData);
    setPublishedStatus(false);
  };
  const handleNavigateToAddNews = () => {
    navigation.navigate('add-news');
  };

  return {
    navigation,
    newsData,
    handleNavigateToAddNews,
    publishedStatus,
    setPublishedStatus,
    handleChangeStatus,
  };
};

export default useViewNews;
