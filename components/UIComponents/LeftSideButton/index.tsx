import * as React from "react";
import {useEffect, useState, useCallback} from "react";
import styled from 'styled-components';

interface Props{
  onClick?() : void;
  position? : {top?: string, left?: string, right?: string, bottom?: string},
  title?: string,
  description?: string
};

const LeftSideButton: React.SFC<Props> = (props) => {
    const {title, description, position} = props;
    const  [isView, setIsView] = useState<boolean>(false);
    const scrollEvent = () => {
      const crossBrowsingTop = document.documentElement.scrollTop || document.body.scrollTop;
      if ( crossBrowsingTop > 400) {
        setIsView(true);
      }
      else{
        setIsView(false);
      }
  };
  useEffect(()=>{
    window.addEventListener('scroll', scrollEvent);
    window.addEventListener('load', scrollEvent);
  }, []);
    return (
    <>
    {isView &&
        <Container position ={position}>
        <Title>{title}</Title>
        <Description>{description}</Description>
        <IconContainer>
          <Icon/>
          <Icon/>
          <Icon/>
        </IconContainer>
      </Container>
    }
    </>
    );
};

LeftSideButton.defaultProps = {
  onClick: ()=>{
    //scroll Event
    window.scrollTo({top: 0, behavior: 'smooth'});
  },
  position: {top: "10rem", left:"2rem"},
  title: "타이틀",
  description: "설명을 기술하는 부분입니부분입니다.설명을 기술하는 부분입니다.설명을 기술하는 부분입니다.설명을 기술하는 부분입니다."

}

const Container = styled.div`
    position: fixed;
    width: 14%;
    top: ${props => props.position.top};
    left: ${props => props.position.left};
    bottom: ${props => props.position.bottom};
    right: ${props => props.position.right};
    @media(max-width:${props=>props.theme.smallPoint}){
      display: none;
    }
`;

const Title = styled.div`
    width: 100%;
    margin-bottom: 1rem;
    font-size: 0.8rem;
    font-weight: 700;
`;

const Description = styled.div`
    width: 100%;
    font-size: 0.5rem;
    line-height : 150%;
    padding-bottom: 2rem;
    border-bottom : 1px solid ${props=>props.theme.achromaticColor};
`;

const IconContainer = styled.div`
  margin-top: 0;
  width: 100%;
  height: 20px;
`;
const Icon= styled.div`
  display: inline-block;
  width: 33.3333%;
  border-radius: 3px;
  height: 100%;
  &:hover{
    background: ${props=>props.theme.achromaticColor};
  }
`;

export default LeftSideButton;