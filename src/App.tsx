import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch } from './store/store';
import { fetchPosts } from './slices/postSlice';
import PostComponent from './components/PostComponent';
import GlobalStyles from './styles/GlobalStyles';

const App: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const posts = useSelector((state: RootState) => state.posts.posts);

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  return (
    <>
      <GlobalStyles />
      <Container>
        {posts.map((post, index) => (
          <PostComponent key={index} post={post} />
        ))}
      </Container>
    </>
  );
};

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  padding: 40px;
  background-color: #f9f9f9;
`;

export default App;
