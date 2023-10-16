import {withHook} from '../../../../../libs/ats-components/src';
import CategoriesView from './CategoriesView';
import useCategories from './useCategories';

const Categories = withHook(useCategories, CategoriesView);

export default Categories;
