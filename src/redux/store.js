import { combineReducers, configureStore } from '@reduxjs/toolkit';
import counterReducer from './features/counter/counterSlice';
import authReducer from './features/AuthSlice'; // Use a consistent naming convention
import AsyncStorage from '@react-native-async-storage/async-storage';
import persistReducer from 'redux-persist/es/persistReducer';
import persistStore from 'redux-persist/es/persistStore';


const reducer = combineReducers({
  counter: counterReducer,
  auth: authReducer // Use the correct reducer name
})

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whiteList: ['auth', 'counter']           //joh joh persist karna hai wo likh do
}
const persistedReducer = persistReducer(persistConfig, reducer)


const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => (    //serializableCheck: false
    getDefaultMiddleware({
      serializableCheck: false
    })
  )
});


const persistor = persistStore(store);

export { store, persistor };