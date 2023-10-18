import {withHook} from '../../../../../libs/ats-components/src';
import StaffView from './StaffView';
import useStaff from './useStaff';

const Staff = withHook(useStaff, StaffView);

export default Staff;
