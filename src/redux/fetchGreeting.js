import { createAsyncThunk } from '@reduxjs/toolkit';

const fetchGreeting = createAsyncThunk('random', async () => {
  try {
    const response = await fetch('http://127.0.0.1:8080/api/v1/random');
    const data = await response.json();

    if (data.message) {
      return { success: false, err: data.message };
    }
    return { success: true, data };
  } catch (err) {
    return { success: false, err };
  }
});

export default fetchGreeting;