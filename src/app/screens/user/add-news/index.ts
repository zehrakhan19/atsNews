import {withHook} from '../../../../../libs/ats-components/src';
import AddNewsView from './AddNewsView';
import useAddNews from './useAddNews';

const AddNews = withHook(useAddNews, AddNewsView);

export default AddNews;
