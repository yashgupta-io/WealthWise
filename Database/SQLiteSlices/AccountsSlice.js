import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  accounts: [],
  status: undefined,
  error: null
}

const accountSlice = createSlice({
  name: 'accountSlice',
  initialState,
  extraReducers: (builders) => { }
})

export default accountSlice.reducer;