import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import userReducer from '../pages/login-out/userSlice';

export default configureStore({
  reducer: {
    user: userReducer,
  },
  middleware:getDefaultMiddleware({
    serializableCheck:false,
  }),
});
