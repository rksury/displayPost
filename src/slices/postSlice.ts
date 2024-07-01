import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchPosts = createAsyncThunk('posts/fetchPosts', async () => {
  const response = await fetch('https://dummyjson.com/posts');
  const data = await response.json();
  return data.posts.slice(0, 10);
});

const postSlice = createSlice({
  name: 'posts',
  initialState: { posts: [] } as { posts: any[] },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchPosts.fulfilled, (state, action) => {
      state.posts = action.payload;
    });
  },
});

export default postSlice.reducer;
