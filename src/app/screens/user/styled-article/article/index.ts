import {withHook} from '../../../../../../libs/ats-components/src';
import ArticleView from './ArticleView';
import useArticle from './useArticle';

const Article = withHook(useArticle, ArticleView);

export default Article;
