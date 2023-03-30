import { createSlice } from '@reduxjs/toolkit';
import fetchGreeting from './fetchGreeting';

// Create the reducer/actions
const greetSlice = createSlice({
  name: 'greet',
  initialState: {
  data: {},
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchGreeting.fulfilled, (state, action) => {
        if (action.payload.success) {
          return { ...state, data: action.payload.data };
        }
        return { ...state, err: action.payload.err};
      })
      .addCase(fetchGreeting.rejected, (state) => ({
        ...state,
        err: 'There was a problem with fetching your request'
      }))       
  },
});

export default greetSlice.reducer;