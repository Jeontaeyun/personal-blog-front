import { NextPageContext, NextPage } from 'next';
import * as React from "react";
import PostPage from "@components/PageComponents/PostPage";

interface Props {
  postId: number;
}

const Post: NextPage<Props> = (props) => {
  const {postId} = props;
  console.log(postId);
  return (
    <>
      <PostPage postId = {postId}/>
    </>
  );
};

Post.getInitialProps = async (context: NextPageContext) => {
  const postId = parseInt(context.query.postId as string , 10);
  return {postId};
}

export default Post;