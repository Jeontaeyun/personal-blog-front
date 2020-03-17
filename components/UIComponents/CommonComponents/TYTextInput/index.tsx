import React, { useRef, useCallback, useState } from "react";
import styled from "styled-components";

interface IProps {
    value: any;
    onChange: (eveny: any) => void;
    placeholder?: string;
    limit?: number;
    width?: string;
}

const TYTextInput: React.FC<IProps> = props => {
    const { value, onChange, placeholder, limit, width } = props;
    const [isFocus, setIsFocus] = useState(false);
    const inputRef = useRef<HTMLInputElement>(null);

    const _onChange = useCallback(
        (event: any) => {
            const shouldLimit = !!!limit || event.target.value.length <= limit;
            if (shouldLimit) {
                onChange(event);
            }
        },
        [onChange, limit]
    );

    const _focusInput = useCallback(() => {
        setIsFocus(true);
    }, []);
    const _blurInput = useCallback(() => {
        setIsFocus(false);
    }, []);

    return (
        <>
            <Container width={width}>
                <Input
                    type={"text"}
                    ref={inputRef}
                    value={value}
                    placeholder={placeholder}
                    onChange={_onChange}
                    onFocus={_focusInput}
                    onBlur={_blurInput}
                />
                <FocusUnderBar isFocus={isFocus} />
            </Container>
        </>
    );
};

TYTextInput.defaultProps = {
    onChange: () => {},
    value: "",
    placeholder: "placeholder",
    width: "200px"
};

const Container = styled.div<{ width: string }>`
    display: flex;
    position: relative;
    width: ${props => props.width};
    margin: 1rem;
`;

const Input = styled.input`
    padding: 0.8rem 1rem;
    width: 100%;
    border: 1px solid ${props => props.theme.achromaticColor};
    border-radius: 0.2rem;
    font-weight: 700;
    color: "black";
    text-align: left;
    &:focus {
        outline: none;
    }
`;

const FocusUnderBar = styled.div<{ isFocus: boolean }>`
    width: 100%;
    height: 2px;
    transform: scaleX(${props => (props.isFocus ? "1" : "0")});
    background: ${props => props.theme.mainColor};
    transition: transform 0.2s cubic-bezier(0.19, 1, 0.22, 1);
    position: absolute;
    bottom: 0;
    border-radius: 2rem;
`;

export default TYTextInput;
