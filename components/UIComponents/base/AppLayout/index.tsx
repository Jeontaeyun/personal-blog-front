import React, { useEffect, useState } from "react";

import styled from "styled-components";
import SideBottomButton from "../../post/SideBottomButton";
import FollowingNavigator from "../FollowingNavigator";

interface IProps {
    MainContents: any;
}

const AppLayout: React.FC<IProps> = props => {
    const { MainContents } = props;
    const [isFollowingNav, setIsFollowingNav] = useState(false);
    const scrollEvent = (event: any) => {
        const crossBrowsingTop = document.documentElement.scrollTop || document.body.scrollTop;
        const shouldSetVisible = crossBrowsingTop > 400;
        if (shouldSetVisible) setIsFollowingNav(true);
        else setIsFollowingNav(false);
    };
    useEffect(() => {
        window.addEventListener("scroll", scrollEvent);
        return () => {
            window.removeEventListener("scroll", scrollEvent);
        };
    }, []);

    return (
        <Container>
            <FollowingNavigator isView={isFollowingNav} />
            {MainContents}
            <SideBottomButton size="40px" />
        </Container>
    );
};

AppLayout.defaultProps = {
    MainContents: "Main"
};

const Container = styled.div`
    width: 100%;
    height: auto;
    background: white;
`;

export default AppLayout;
