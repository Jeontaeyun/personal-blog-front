import * as React from "react";
import styled from 'styled-components';

interface Props{
    children?: string;
    onClick?(): void;
};

const Button : React.SFC<Props> = (props) => {
    const {children, onClick} = props;
    return (
    <>
        <PlusButton onClick={onClick}>{children}</PlusButton>
    </>
    );
};

Button.defaultProps = {
    children: "DEFAULT",
    onClick:() => {}
}

const PlusButton = styled.div`
    display: inline-block;
    text-align: center;
    margin:2rem auto;
    padding: 1rem;
    background: linear-gradient(45deg, #e45d4c,#eead9e);
    border-radius: 3rem;
    font-weight: 700;
    color: white;
    cursor:pointer;
`;

export default Button;