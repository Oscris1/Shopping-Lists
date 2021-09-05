import {configureStore} from '@reduxjs/toolkit';
import {useDispatch} from 'react-redux';
import {combineReducers} from 'redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

import listsSlice, {listsAdapter} from './lists-slice';
import listItemsSlice, {listItemsAdapter} from './list-items-slice';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

const rootReducer = combineReducers({
  activeLists: listsSlice,
  listItems: listItemsSlice,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export let persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();

export const activeListsSelectors = listsAdapter.getSelectors<RootState>(
  state => state.activeLists,
);

export const listItemsSelectors = listItemsAdapter.getSelectors<RootState>(
  state => state.listItems,
);

export default store;
