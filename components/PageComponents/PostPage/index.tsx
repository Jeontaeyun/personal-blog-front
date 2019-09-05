import * as React from "react";
import styled from 'styled-components';


interface Props{

}

const PostPage: React.SFC<Props> = (props) => {
  return (
    <>
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