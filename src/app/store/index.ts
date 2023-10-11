import {configureStore} from '@reduxjs/toolkit';
import {useDispatch} from 'react-redux';
import {persistReducer, persistStore} from 'redux-persist';
import reduxStorage from './reduxStorage';
import rootReducer, {rootMiddlewares} from './rootReducer';

const persistConfig = {
  key: 'root',
  storage: reduxStorage,
  blacklist: [],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export default () => {
  const store = configureStore({
    reducer: persistedReducer,
    middleware: getDefaultMiddleware =>
      getDefaultMiddleware({
        immutableCheck: false,
        serializableCheck: false,
      }).concat(rootMiddlewares),
  });
  const persistor = persistStore(store);
  return {store, persistor};
};

export const useAppDispatch = () => useDispatch();

// Infer the `RootState` and `AppDispatch` types from the store itself
// export type RootState = ReturnType<typeof store.getstate>
// export type AppDispatch = typeof store.dispatch
