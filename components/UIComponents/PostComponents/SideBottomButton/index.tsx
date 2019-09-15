import * as React from "react";
import {useEffect, useState} from "react";
import styled from 'styled-components';

interface Props{
  onClick?() : void;
  img? : string;
  size? : string;
};

const SideBottomButton: React.SFC<Props> = (props) => {
    const {onClick, img, size} = props;
    const  [isView, setIsView] = useState<boolean>(false);
    const scrollEvent = () => {
      const crossBrowsingTop = document.documentElement.scrollTop || document.body.scrollTop;
      if ( crossBrowsingTop> 400) {
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
      <BottomButton onClick={onClick} size={size}>
        <Icon img={img}/>
      </BottomButton>
    }
    </>
    );
};

SideBottomButton.defaultProps = {
  onClick: ()=>{
    //scroll Event
    window.scrollTo({top: 0, behavior: 'smooth'});
  },
  img : '/sidebarIcon.svg',
  size: "50px"
}

const Icon = styled.div<Props>`
  position:absolute;
  top: 30%;
  left: 50%;
  transform: translateX(-50%);
  width: 50%;
  height: 50%;
  border-radius: 100%;
  background: url("${props => props.img}");
  background-repeat: no-repeat;
`;

const BottomButton = styled.div`
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  width: ${props=>props.size};
  height: ${props=>props.size};
  border-radius: 20%;
  background: linear-gradient(45deg, #e45d4c,#eead9e);
  -webkit-box-shadow: 0px 0px 58px 0px rgba(148,148,148,1);
  -moz-box-shadow: 0px 0px 58px 0px rgba(148,148,148,1);
  box-shadow: 0px 0px 58px 0px rgba(148,148,148,1);
  cursor: pointer;
  &:hover{
    border-radius: 100%;
    transition: border-radius 0.3s ease-in;
  }
`;
export default SideBottomButton;