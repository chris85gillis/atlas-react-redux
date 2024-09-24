import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import listsReducer from './slices/listsSlice';
import { FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist';

// Create a persist configuration object
const persistConfig = {
  key: 'root',
  storage,
};

// Create a persisted reducer by wrapping your listsReducer
const persistedReducer = persistReducer(persistConfig, listsReducer);

// Configure the store with the persisted reducer
export const store = configureStore({
  reducer: {
    lists: persistedReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;