import React from "react";
import styled from "styled-components";

interface IProps {
    children?: React.ReactChild;
}

const Badge: React.FC<IProps> = props => {
    const { children } = props;
    return <Container>{children}</Container>;
};

const Container = styled.div`
    display: inline-block;
    width: auto;
    height: auto;
    text-align: center;
    padding: 0.3rem 1rem;
    margin-right: 0.6rem;
    border-radius: 5px;
    font-size: 0.8rem;
    background: ${props => props.theme.color.sub};
    color: ${props => props.theme.color.white};
    font-weight: 800;
`;

export default Badge;
