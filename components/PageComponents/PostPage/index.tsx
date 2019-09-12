import * as React from "react";
import PostContent from "@components/UIComponents/PostContent";



interface Props{

}

const PostPage: React.SFC<Props> = (props) => {
  return (
    <>
      <PostContent/>
    </>
  );
};

PostPage.defaultProps={

}

export default PostPage;