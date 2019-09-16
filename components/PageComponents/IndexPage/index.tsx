import * as React from "react";
import PostCardList from "@components/UIComponents/MainComponents/PostCardList";
import styled from "styled-components";

interface Props{
  category?: string[];
}

const IndexPage: React.SFC<Props> = (props) => {
  const {category} = props;
  return (
    <>
    <Container>
      {category.map((item, idx)=><PostCardList title={item} key={idx}/>)}
    </Container>
    </>
  );
};

IndexPage.defaultProps={
  category : ["프론트엔드", "백엔드", "디자이너"]
}

const Container = styled.div`
  width: 60%;
  margin: 1rem auto;
`;

export default IndexPage;