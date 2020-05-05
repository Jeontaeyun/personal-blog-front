import React from "react";
import styled from "styled-components";
import AdminSideBar from "../AdminSideBar";

interface IProps {
    contents: React.ReactElement;
}

const AdminLayout: React.FC<IProps> = props => {
    const { contents } = props;
    return (
        <>
            <Container>
                <AdminSideBar />
                <Contents>{contents}</Contents>
            </Container>
        </>
    );
};

const Container = styled.div`
    position: "relative";
    overflow-x: hidden;
    height: 100vh;
    width: 100vw;
`;

const Contents = styled.div`
    position: absolute;
    min-height: 4000px;
    left: 300px;
    height: auto;
    width: 100%;
    overflow: scroll;
`;
export default AdminLayout;
