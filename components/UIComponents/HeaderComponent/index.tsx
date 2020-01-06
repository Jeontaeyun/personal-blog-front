import * as React from "react";
import styled from "styled-components";

interface Props {
  title?: string;
  img?: string;
  date?: string;
  onClick?(): void;
}

const HeaderComponent: React.SFC<Props> = props => {
  const { onClick, title, img, date } = props;
  return (
    <>
      <TextContainer>
        <Title>{title}</Title>
        <Date>{date}</Date>
      </TextContainer>
      <HeaderContainer />
      <Header onClick={onClick} img={img} />
    </>
  );
};

HeaderComponent.defaultProps = {
  onClick: () => {},
  img: "/dummy.png",
  //타이틀 20자 제한을 걸어야 겠다.
  title: "CONNECT DOT",
  date: `안녕하세요 개발자 전태윤입니다. \n 
         새로운 기술을 배우는 것을 즐기며, 어제 보다 나은 사람이 되기 위해 고군분투합니다. `,
};

const TextContainer = styled.div`
  width: 100%;
  text-align: center;
  color: white;
  position: absolute;
  z-index: 110;
  margin-top: 4rem;
  &:p {
    margin-top: 1.2rem;
  }
  @media screen and (max-width: ${props => props.theme.mediumPoint}) {
    margin-top: 6rem;
  }
`;

const Title = styled.p`
  font-size: 2.3rem;
  padding-left: 1rem;
  padding-right: 1rem;
  font-weight: 800;
  @media screen and (max-width: ${props => props.theme.mediumPoint}) {
    font-weight: 700;
    font-size: 1.5rem;
  }
`;

const Date = styled.p`
  font-size: 1rem;
  @media screen and (max-width: ${props => props.theme.mediumPoint}) {
    font-size: 0.7rem;
  }
  padding-left: 4rem;
  padding-right: 4rem;
`;

const HeaderContainer = styled.div`
  position: absolute;
  margin-top: 0;
  z-index: 100;
  text-align: center;
  width: 100%;
  height: 100%;
  background: ${props => props.theme.subColor};
  opacity: 0.6;
`;

const Header = styled.div<Props>`
  width: 100%;
  height: 100%;
  margin: 0 auto;
  background: url("${props => props.img}");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`;

export default HeaderComponent;
