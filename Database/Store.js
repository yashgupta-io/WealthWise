import { configureStore } from "@reduxjs/toolkit";
import accountReducer from './SQLiteSlices/AccountsSlice';
import themeReducer from './SQLiteSlices/ThemeSlice';

export const store = configureStore({
  reducer: {
    accounts: accountReducer,
    theme: themeReducer
  }
})