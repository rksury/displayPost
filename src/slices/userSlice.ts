import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchUser = createAsyncThunk('users/fetchUser', async (userId: number) => {
  const response = await fetch(`https://dummyjson.com/users/${userId}`);
  const data = await response.json();
  return { userId, ...data };
});

const userSlice = createSlice({
  name: 'users',
  initialState: {} as Record<number, any>,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchUser.fulfilled, (state, action) => {
      state[action.payload.userId] = action.payload;
    });
  },
});

export default userSlice.reducer;
