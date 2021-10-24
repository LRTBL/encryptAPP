import {createStore, combineReducers, applyMiddleware} from 'redux';
import {persistStore, persistReducer} from 'redux-persist';
import ReduxThunk from 'redux-thunk';
import AsyncStorage from '@react-native-async-storage/async-storage';

import general from '../../modules/core/general/reducer';
import ui from '../../modules/core/ui/reducer';

const reducer = combineReducers({general, ui});

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: [''],
  timeout: 0,
};

const persistedReducer = persistReducer(persistConfig, reducer);

export default () => {
  let store = createStore(persistedReducer, applyMiddleware(ReduxThunk));
  let persistor = persistStore(store);
  return {store, persistor};
};
