import * as React from "react";
import styled from 'styled-components';
import Link from "next/link";

interface Props{
    title?: string;
    footerList? : {"list": string, "link": string}[];
}

const FooterList: React.SFC<Props> = (props) => {
    const {title, footerList} = props;
  return (
    <>
      <FooterContainer>
      <FooterTitle>{title}</FooterTitle>
      {footerList.map(item => <><NewLink href={item.link}><a><FooterContents>{item.list}</FooterContents></a></NewLink></>)}
      </FooterContainer>
    </>
  );
};

FooterList.defaultProps={
    title:"카테고리",
    footerList:[{list : "아이템", link: "/"},{list : "아이템", link: "/"},{list : "아이템", link: "/"}]
}

const FooterContainer = styled.div`
  display: inline-block;
  vertical-align: top;
  margin-top:1rem;
  margin-left: 3rem;
`;

const NewLink = styled(Link)`
   
    &:focus{
        text-decoration: none;
    }
`;

const FooterTitle = styled.div`
  font-size : 1.2rem;
  color : white;
  font-weight : 700;
  margin-bottom : 1rem;
`;

const FooterContents = styled.div`
  font-size : 1rem;
  margin-top : 0.5rem;
  color : white;
`;

export default FooterList;