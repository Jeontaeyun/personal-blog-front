import React from "react";
import styled from "styled-components";

interface IProps {
    children?: string;
    onClick?: () => void;
    disabled?: boolean;
}

const Button: React.FC<IProps> = props => {
    const { children, onClick, disabled } = props;
    return (
        <>
            <PlusButton onClick={onClick} disabled={disabled}>
                {children}
            </PlusButton>
        </>
    );
};

Button.defaultProps = {
    children: "DEFAULT",
    onClick: () => {},
    disabled: false
};

const PlusButton = styled.div<IProps>`
    display: inline-block;
    text-align: center;
    margin: 2rem auto;
    padding: 0.8rem 1rem;
    background: ${props => (props.disabled ? props.theme.achromaticColor : `linear-gradient(45deg, #e45d4c,#eead9e)`)};
    border-radius: 1.5rem;
    font-weight: 700;
    color: white;
    cursor: ${props => (props.disabled ? "not-allowed" : "pointer")};
`;

export default Button;
