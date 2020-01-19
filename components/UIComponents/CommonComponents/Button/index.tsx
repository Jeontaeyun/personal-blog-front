import React from "react";
import styled from "styled-components";

interface IProps {
    children?: string;
    onClick?(): void;
    disabled?: boolean;
}

/**
 * 안녕하세요 라고 보여주고 싶을 땐 `Hello` 컴포넌트를 사용하세요.
 *
 * - `big` 값을 `true`로 설정하면 **크게** 나타납니다.
 * - `onHello` 와 `onBye` props로 설정하여 버튼이 클릭했을 때 호출 할 함수를 지정 할 수 있습니다.
 */
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
