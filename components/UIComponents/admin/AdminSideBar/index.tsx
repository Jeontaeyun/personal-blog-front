import React from "react";
import styled from "styled-components";

interface IProps {}

const AdminSideBar: React.FC<IProps> = props => {
    return (
        <>
            <SideBar />
        </>
    );
};

const SideBar = styled.div`
    position: fixed;
    display: inline-block;
    left: 0;
    top: 0;
    height: 100vh;
    width: 300px;
    background-color: #343a40;
`;

export default AdminSideBar;
