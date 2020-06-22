import React, { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";

interface IProps {
    onClick?(): void;
    img?: string;
    size?: string;
}

const SideBottomButton: React.FC<IProps> = props => {
    const { onClick, img, size } = props;
    const [isView, setIsView] = useState<boolean>(false);

    const scrollEvent = () => {
        const crossBrowsingTop = document.documentElement.scrollTop || document.body.scrollTop;
        if (crossBrowsingTop > 400) {
            setIsView(true);
        } else {
            setIsView(false);
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", scrollEvent);
        window.addEventListener("load", scrollEvent);
        return () => {
            window.removeEventListener("scroll", scrollEvent);
            window.removeEventListener("load", scrollEvent);
        };
    }, []);

    return (
        <>
            {isView && (
                <Container view={isView} onClick={onClick} size={size}>
                    <Icon img={img} />
                </Container>
            )}
        </>
    );
};

SideBottomButton.defaultProps = {
    onClick: () => {
        //scroll Event
        window.scrollTo({ top: 0, behavior: "smooth" });
    },
    img: "/icon/icon_etc_sidebarIcon.svg",
    size: "50px"
};

const fadeIn = keyframes`
  0% {
    transform: scale(1);
    opacity: 0;
  }

  1% {
    transform: scale(0.5);
    opacity: 1;
  }
  45% {
    transform: scale(1.05);
    opacity: 1;
  }
  80% {
    transform: scale(0.95);
    opacity: 1;
  }
  100%{
      transform: scale(1);
      opacity: 1;
  }
`;

const fadeOut = keyframes`
  0% {
    transform: scale(1);
    opacity: 1;
  }

  20% {
    transform: scale(1.05);
    opacity: 1;
  }
  45% {
    transform: scale(0.5);
    opacity: 1;
  }
  99% {
    transform: scale(0.2);
    opacity: 1;
  }
  100%{
      transform: scale(0);
      opacity: 0;
  }
`;

const Container = styled.div<{ size: string; view: boolean }>`
    position: fixed;
    bottom: 2rem;
    right: 2rem;
    width: ${props => props.size};
    height: ${props => props.size};
    border-radius: 0.4rem;
    background: linear-gradient(45deg, #e45d4c, #eead9e);
    -webkit-box-shadow: 0px 2px 6px -2px rgba(41, 42, 43, 0.16);
    -moz-box-shadow: 0px 2px 6px -2px rgba(41, 42, 43, 0.16);
    box-shadow: 0px 2px 6px -2px rgba(41, 42, 43, 0.16);
    cursor: pointer;
    &:hover {
        border-radius: 100%;
        transition: border-radius 0.3s ease-in;
    }
    animation: ${props => (props.view ? fadeIn : fadeOut)} 0.3s;
`;
const Icon = styled.div<IProps>`
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

export default SideBottomButton;
