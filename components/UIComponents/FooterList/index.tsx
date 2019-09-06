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
      {footerList.map(item => 
        <><Link href={item.link}>
          <a>
            <FooterContents>{item.list}</FooterContents>
          </a>
        </Link></>)
      }
      </FooterContainer>
    </>
  );
};

FooterList.defaultProps={
    title:"카테고리",
    footerList:[{list : "카카오톡", link: "/"},{list : "페이스북", link: "/"},{list : "인스타그램", link: "/"},{list : "깃허브", link: "/"}]
}

const FooterContainer = styled.div`
  display: inline-block;
  vertical-align: top;
  margin-top:1rem;
  margin-left: 10rem;
  @media(max-width:800px){
    display: block;
    margin: 2rem auto;
    margin-left: 2rem;
  }
`;



const FooterTitle = styled.div`
  font-size : 1.2rem;
  color : white;
  font-weight : 700;
  margin-bottom : 2rem;
`;

const FooterContents = styled.div`
  font-size :0.8rem;
  margin-left: 1rem;
  margin-top : 1rem;
  color : white;
`;

export default FooterList;