/* eslint-disable prettier/prettier */
import {withHook} from '../../../../../../libs/ats-components/src';
import useSideBar from './useSideBar';
import SideBarView from './SideBarView';

const SideBar = withHook(useSideBar, SideBarView);

export default SideBar;
