import * as React from "react";
import styled from 'styled-components';
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

const Contents = styled.div`
    width: 70%;
    margin: 0 auto;
    @media (max-width:800px){
        width:90%;
    }
`;

export default PostPage;