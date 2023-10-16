import {combineReducers} from 'redux';
import userSlice from '../features/user/userSlice';
// import {authApi} from '../services/auth/authApi';
// import messageSlice from '../features/message/messageSlice';

const rootReducer = combineReducers({
  user: userSlice,
  // common: commonSlice,
  // message: messageSlice,
});

export const rootMiddlewares = [
  // authApi.middleware
];

export default rootReducer;
