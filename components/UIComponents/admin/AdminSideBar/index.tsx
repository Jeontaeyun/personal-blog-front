import React from "react";
import styled from "styled-components";

interface IProps {}

const AdminSideBar: React.FC<IProps> = props => {
    return (
        <SideBar>
            <AdminList>{"대시보드"}</AdminList>
            <AdminList>{"시리즈 관리"}</AdminList>
            <AdminList>{"프로필 / SNS"}</AdminList>
            <AdminList>{"설정"}</AdminList>
            <AdminList>{"로그아웃"}</AdminList>
        </SideBar>
    );
};

const SideBar = styled.div`
    position: fixed;
    display: inline-block;
    left: 0;
    top: 0;
    height: 100%;
    width: 300px;
    background-color: ${props => props.theme.color.black99};
`;

const AdminList = styled.div`
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 60px;
    color: ${props => props.theme.color.white};
    font-size: 16px;
    &:hover {
        color: ${props => props.theme.color.black99};
        background: ${props => props.theme.color.white};
    }
    & + & {
        border-top: 1px solid ${props => props.theme.color.white};
    }
`;

export default AdminSideBar;
