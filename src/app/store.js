import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../pages/login-out/userSlice';

export default configureStore({
  reducer: {
    user: userReducer,
  },
});
