import * as React from "react";
import PostCardList from "components/UIComponents/MainComponents/PostCardList";
import styled from "styled-components";

interface IProps {
  category?: string[];
}

const IndexPage: React.FC<IProps> = props => {
  const { category } = props;
  return (
    <>
      <Container>
        {category.map((item, idx) => (
          <PostCardList title={item} key={idx} />
        ))}
      </Container>
    </>
  );
};

IndexPage.defaultProps = {
  category: ["프론트엔드", "백엔드", "디자이너"],
};

const Container = styled.div`
  width: 80%;
  margin: 1rem auto;
  @media (max-width: ${props => props.theme.smallPoint}) {
    width: 96%;
  }
`;

export default IndexPage;
