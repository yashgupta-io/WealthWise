import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { CreateAsync, ReadAsync } from "../AsyncStorage";

const initialState = {
  theme: 'light',
  status: 'idle',
  error: null
}

const themeSlice = createSlice({
  name: 'themeSlice',
  initialState,
  reducers: {
    toggleThemeLocally(state) {
      state.theme = state.theme === 'light' ? 'dark' : 'light';
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(getTheme.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getTheme.fulfilled, (state, action) => {
        state.status = 'success';
        state.theme = action.payload;
      })
      .addCase(getTheme.rejected, (state) => {
        state.status = 'error';
      })
      .addCase(setTheme.fulfilled, (state, action) => {
        state.status = 'success';
        state.theme = action.payload;
      });
  }
})

export const getTheme = createAsyncThunk('theme/getTheme', async () => {
  try {
    const theme = await ReadAsync('Theme');
    if (theme === 'dark' || theme === 'light') {
      return theme;
    }
  } catch (error) {
    throw new Error(error);
  }
})

export const setTheme = createAsyncThunk('theme/setTheme', async (colorScheme) => {
  try {
    if (colorScheme === 'light') {
      colorScheme = 'dark';
    }
    else if (colorScheme === 'dark') {
      colorScheme = 'light';
    }
    await CreateAsync('Theme', colorScheme);
    return colorScheme;
  } catch (error) {
    throw new Error(error);
  }
})

export const { toggleThemeLocally } = themeSlice.actions;
export default themeSlice.reducer;