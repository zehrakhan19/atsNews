// import {useDispatch, useSelector} from 'react-redux';
// import PubSub from 'pubsub-js';
import Guest from './Guest';
import MainNav from './Main';
// import {AUTH_EVENTS} from '../pub-sub/events';
// import {userLogout} from '../features/user/userSlice';

export default function RootNav() {
  // const user = useSelector((state: any) => state.user.loggedIn);
  // const dispatch = useDispatch();

  // PubSub.subscribe(AUTH_EVENTS.TOKEN_EXPIRED, () => {
  //   dispatch(userLogout());
  // });

  if (true) {
    return <MainNav />;
  }

  return <Guest />;
}
