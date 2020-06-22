import React, { useEffect, useState } from "react";

import styled from "styled-components";
import SideBottomButton from "../../post/SideBottomButton";
import FollowingNavigator from "../FollowingNavigator";

interface IProps {
    MainContents: any;
}

const AppLayout: React.FC<IProps> = props => {
    const { MainContents } = props;
    return (
        <Container>
            <FollowingNavigator isView={true} />
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
