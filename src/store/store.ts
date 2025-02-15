import { configureStore } from '@reduxjs/toolkit';
import postReducer from '../slices/postSlice';
import userReducer from '../slices/userSlice';

const store = configureStore({
  reducer: {
    posts: postReducer,
    users: userReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
