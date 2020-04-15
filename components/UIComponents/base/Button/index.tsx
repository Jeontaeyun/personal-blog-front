import React from "react";
import styled from "styled-components";

interface IProps {
    children?: string;
    onClick?: (event) => void;
    disabled?: boolean;
}

const Button: React.FC<IProps> = props => {
    const { children, onClick, disabled } = props;

    return (
        <Container onClick={onClick} disabled={disabled}>
            {children}
        </Container>
    );
};

Button.defaultProps = {
    children: "DEFAULT",
    onClick: () => {},
    disabled: false
};

const Container = styled.div<IProps>`
    display: inline-block;
    color: white;
    font-weight: 700;
    text-align: center;
    margin: 2rem auto;
    padding: 0.8rem 1rem;
    background: ${props => (props.disabled ? props.theme.color.achromatic : props.theme.color.gradient)};
    border-radius: ${props => props.theme.BORDER_RADIUS};
    cursor: ${props => (props.disabled ? "not-allowed" : "pointer")};
`;

export default Button;
