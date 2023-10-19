import {withHook} from '../../../../../libs/ats-components/src';
import ViewNewsView from './ViewNewsView';
import useViewNews from './useViewNews';

const ViewNews = withHook(useViewNews, ViewNewsView);

export default ViewNews;
