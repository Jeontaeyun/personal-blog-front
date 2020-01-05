import * as React from 'react';
import styled from 'styled-components';
import PostIndicator from '../PostIndicator';
import LeftSideButton from '../LeftSideButton';
import ReplyEditor from '../ReplyEditor';
import ReplyBox from '../ReplyBox';
import PostCardList from '../../MainComponents/PostCardList';

interface Props {
  post?: {
    id: string;
    title: string;
    description: string;
  };
  reply?: Array<{
    id: string;
    name: string;
    description: string;
  }>;
}

const PostContent: React.SFC<Props> = props => {
  const { post } = props;
  const { title, description, id } = post;
  console.log(post);
  return (
    <>
      <PostIndicator />
      <LeftSideButton />
      <PostContainer>
        {description}
        <ReplyEditor />
        <ReplyBox />
        <ReplyBox />
        <ReplyBox />
        <PostCardList title="해당 카테고리 다른글" />
      </PostContainer>
    </>
  );
};

PostContent.defaultProps = {};

const PostContainer = styled.div`
  width: 60%;
  margin: 1rem auto;
  @media (max-width: 800px) {
    width: 80%;
  }
`;

export default PostContent;
