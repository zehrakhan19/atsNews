import {withHook} from '../../../../../libs/ats-components/src';
import AddEmployeeView from './AddEmployeeView';
import useAddEmployee from './useAddEmployee';

const AddEmployee = withHook(useAddEmployee, AddEmployeeView);

export default AddEmployee;
