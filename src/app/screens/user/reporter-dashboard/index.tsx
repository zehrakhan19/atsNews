import {withHook} from '../../../../../libs/ats-components/src';
import ReporterDashboardView from './ReporterDashboardView';
import useReporterDashboard from './useReporterDashboard';

const ReporterDashboard = withHook(useReporterDashboard, ReporterDashboardView);

export default ReporterDashboard;
