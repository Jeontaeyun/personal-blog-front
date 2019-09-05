import * as React from "react";
import styled from 'styled-components';
import PostCardList from "@components/UIComponents/PostCardList";

interface Props{
  category?: string[];
}

const IndexPage: React.SFC<Props> = (props) => {
  const {category} = props;
  return (
    <>
      {category.map((item, idx)=><PostCardList title={item} key={idx}/>)}
    </>
  );
};

IndexPage.defaultProps={
  category : ["프론트엔드", "백엔드", "디자이너"]
}

export default IndexPage;