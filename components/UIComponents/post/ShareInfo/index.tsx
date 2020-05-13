import React, { useEffect, useState, useCallback } from "react";
import styled from "styled-components";
import ProfileImage from "../../base/ProfileImage";

interface IProps {
    onClick?(): void;
    position?: { top?: string; left?: string; right?: string; bottom?: string };
    title?: string;
    description?: string;
    visible?: boolean;
}

const ShareInfo: React.FC<IProps> = props => {
    const { title, description, position, visible } = props;
    const [isView, setIsView] = useState<boolean>(true);
    const [isSharingVisible, setIsSharingVisible] = useState<boolean>(false);
    const onClickSharing = useCallback(
        e => {
            e.preventDefault();
            setIsSharingVisible(!isSharingVisible);
        },
        [isSharingVisible]
    );

    useEffect(() => {
        setIsView(visible);
    }, [visible]);

    if (!isView) {
        return null;
    }
    if (isView) {
        return (
            <Container position={position}>
                <SideProfile size="120px" />
                <Title>{title}</Title>
                <Description>{description}</Description>
                <IconContainer>
                    <Icon src="/icon/icon_sns_git.svg">
                        <a></a>
                    </Icon>
                    <Icon src="/icon/icon_action.svg">
                        <a></a>
                    </Icon>
                    <Icon src="/icon/icon_action_share.svg" onClick={onClickSharing}>
                        <a></a>
                    </Icon>
                    <SharingList visible={isSharingVisible}>
                        <SharingIcon src="/icon/icon_sns_instagram.svg" visible={isSharingVisible}>
                            <a></a>
                        </SharingIcon>
                        <SharingIcon src="/icon/icon_sns_twitter.svg" visible={isSharingVisible}>
                            <a></a>
                        </SharingIcon>
                        <SharingIcon src="/icon/icon_sns_facebook.svg" visible={isSharingVisible}>
                            <a></a>
                        </SharingIcon>
                    </SharingList>
                </IconContainer>
            </Container>
        );
    }
};

ShareInfo.defaultProps = {
    onClick: () => {},
    position: { top: "2rem", left: "2rem" },
    title: "타이틀",
    description: `설명을 기술하는 부분입니부분입니다.설명을 기술하는 부분입니다.
                설명을 기술하는 부분입니다.설명을 기술하는 부분입니다.`
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
    border-bottom: 1px solid ${props => props.theme.color.achromatic};
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
    background: ${props => props.theme.color.achromatic};
    a{
      background-color: ${props => props.theme.color.main};
    }
  }
`;

const SharingList = styled.ul<{ visible: boolean }>`
    height: "auto";
    width: 33.3333%;
    display: ${props => (props.visible ? "block" : "none")};
    list-style-type: none;
    position: absolute;
    right: 0;
    padding-left: -40px;
    padding-right: 0;
`;

const SharingIcon = styled.li<{ visible: boolean; src: string }>`
  display: ${props => (props.visible ? "block" : "none")};
  margin:0;
  padding: 0;
  margin-top: 1rem;
  width: 100%;
  height: 100%;
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
    background: ${props => props.theme.color.achromatic};
    a{
      background-color: ${props => props.theme.color.main};
    }
  }
`;

export default ShareInfo;
