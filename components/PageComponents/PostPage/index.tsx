import * as React from "react";
import PostContent from "components/UIComponents/PostComponents/PostContent";

import { useQuery } from "@apollo/react-hooks";
import { GET_POST } from "./postpageGQL";

interface IProps {
  postId: number;
}

const PostPage: React.FC<IProps> = props => {
  const { postId } = props;
  const { loading, error, data } = useQuery(GET_POST, {
    variables: { post_id: postId },
  });
  return (
    <>
      <PostContent post={{ id: "1", title: "hi", description: "hiij" }} />
    </>
  );
};

PostPage.defaultProps = {};

export default PostPage;
