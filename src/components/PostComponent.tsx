import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUser } from '../slices/userSlice';
import { RootState, AppDispatch } from '../store/store';

interface PostProps {
  post: any;
}

const PostComponent: React.FC<PostProps> = ({ post }) => {
  const dispatch = useDispatch<AppDispatch>();
  const user = useSelector((state: RootState) => state.users[post.userId]);

  useEffect(() => {
    if (!user) {
      dispatch(fetchUser(post.userId));
    }
  }, [dispatch, post.userId, user]);

  return (
    <PostContainer>
      {user && (
        <UserInfo>
          {user.firstName} {user.lastName}
        </UserInfo>
      )}
      <Title>{post.title}</Title>
      <Body>{post.body}</Body>
    </PostContainer>
  );
};

const PostContainer = styled.div`
  border: 1px solid #ddd;
  padding: 20px;
  border-radius: 10px;
  background-color: #fff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s, box-shadow 0.3s;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  }
`;

const UserInfo = styled.div`
  font-weight: bold;
  color: #555;
  margin-bottom: 10px;
`;

const Title = styled.h2`
  margin-top: 0;
  color: #333;
  font-size: 1.2em;
`;

const Body = styled.p`
  margin-bottom: 0;
  color: #666;
`;

export default PostComponent;
