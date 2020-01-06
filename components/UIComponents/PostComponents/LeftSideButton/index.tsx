import * as React from "react";
import { useEffect, useState, useCallback } from "react";
import styled from "styled-components";
import ProfileImage from "../../CommonComponents/ProfileImage";

interface IProps {
  onClick?(): void;
  position?: { top?: string; left?: string; right?: string; bottom?: string };
  title?: string;
  description?: string;
}

const LeftSideButton: React.FC<IProps> = props => {
  const { title, description, position } = props;
  const [isView, setIsView] = useState<boolean>(false);
  const [sharing, setSharing] = useState<boolean>(false);
  const scrollEvent = () => {
    const crossBrowsingTop =
      document.documentElement.scrollTop || document.body.scrollTop;
    if (crossBrowsingTop > 400) setIsView(true);
    else setIsView(false);
  };
  useEffect(() => {
    window.addEventListener("scroll", scrollEvent);
    window.addEventListener("load", scrollEvent);
  }, []);

  const onClickSharing = useCallback(
    e => {
      e.preventDefault();
      setSharing(!sharing);
    },
    [sharing],
  );
  return (
    <>
      {isView && (
        <Container position={position}>
          <SideProfile size="120px" />
          <Title>{title}</Title>
          <Description>{description}</Description>
          <IconContainer>
            <Icon src="/icon/git.svg">
              <a></a>
            </Icon>
            <Icon src="/icon/like.svg">
              <a></a>
            </Icon>
            <Icon src="/icon/share.svg" onClick={onClickSharing}>
              <a></a>
            </Icon>
            <SharingList visible={sharing}>
              <SharingIcon src="/icon/instagram.svg" visible={sharing}>
                <a></a>
              </SharingIcon>
              <SharingIcon src="/icon/twitter.svg" visible={sharing}>
                <a></a>
              </SharingIcon>
              <SharingIcon src="/icon/facebook.svg" visible={sharing}>
                <a></a>
              </SharingIcon>
            </SharingList>
          </IconContainer>
        </Container>
      )}
    </>
  );
};

LeftSideButton.defaultProps = {
  onClick: () => {
    //scroll Event
    window.scrollTo({ top: 0, behavior: "smooth" });
  },
  position: { top: "7rem", left: "2rem" },
  title: "타이틀",
  description: `설명을 기술하는 부분입니부분입니다.설명을 기술하는 부분입니다.
                설명을 기술하는 부분입니다.설명을 기술하는 부분입니다.`,
};

const Container = styled.div<Partial<IProps>>`
  position: fixed;
  width: 14%;
  top: ${props => props.position.top};
  left: ${props => props.position.left};
  bottom: ${props => props.position.bottom};
  right: ${props => props.position.right};
  @media screen and (max-width: ${props => props.theme.smallPoint}) {
    display: none;
  }
`;

const SideProfile = styled(ProfileImage)`
  margin: 0 auto;
  margin-bottom: 1rem;
  border: none;
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
  line-height: 150%;
  padding-bottom: 2rem;
  border-bottom: 1px solid ${props => props.theme.achromaticColor};
`;

const IconContainer = styled.div`
  margin-top: 0;
  width: 100%;
  height: 40px;
`;

const Icon = styled.div<{ src: string }>`
  display: inline-block;
  position : relative;
  width: 33.3333%;
  border-radius: 3px;
  height: 100%;
  cursor: pointer;
  a{
    display: block;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    width: 20px;
    height: 20px;
    -webkit-mask-image: url("${props => props.src}");
    mask-image: url("${props => props.src}");
    background-color: black;
  }
  &:hover{
    background: ${props => props.theme.achromaticColor};
    a{
      background-color: ${props => props.theme.mainColor};
    }
  }
`;

const SharingList = styled.ul<{ visible: boolean }>`
  display: ${props => (props.visible ? "block" : "none")};
  list-style-type: none;
  position: absolute;
  padding-left: -40px;
  right: 0;
`;

const SharingIcon = styled.li<{ visible: boolean; src: string }>`
  display: ${props => (props.visible ? "block" : "none")};
  margin-top: 1rem;
  a{
    display: block;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    width: 20px;
    height: 20px;
    -webkit-mask-image: url("${props => props.src}");
    mask-image: url("${props => props.src}");
    background-color: black;
  }
  &:hover{
    background: ${props => props.theme.achromaticColor};
    a{
      background-color: ${props => props.theme.mainColor};
    }
  }
`;

export default LeftSideButton;
