import React, { useRef, useCallback, useState } from "react";
import styled from "styled-components";

interface IProps {
    type: "text" | "password";
    value: any;
    onChange: (eveny: any) => void;
    label?: string;
    placeholder?: string;
    limit?: number;
    width?: string;
}

const TYTextInput: React.FC<IProps> = props => {
    const { type, value, onChange, placeholder, limit, width, label } = props;
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
            <Wrapper>
                <Label>{label}</Label>
                <Container width={width}>
                    <Input
                        type={type}
                        ref={inputRef}
                        value={value}
                        placeholder={placeholder}
                        onChange={_onChange}
                        onFocus={_focusInput}
                        onBlur={_blurInput}
                    />
                </Container>
            </Wrapper>
        </>
    );
};

TYTextInput.defaultProps = {
    onChange: () => {},
    value: "",
    label: "",
    placeholder: "placeholder",
    width: "200px"
};

const Wrapper = styled.div`
    margin: 1rem;
`;

const Label = styled.label`
    display: block;
    margin-bottom: 0.6rem;
`;

const Container = styled.div<{ width: string }>`
    display: flex;
    position: relative;
    width: ${props => props.width};
`;

const Input = styled.input`
    padding: 0.8rem 1rem;
    width: 100%;
    border: none;
    border: 1px solid ${props => props.theme.achromaticColor};
    border-radius: 0.2rem;
    font-weight: 700;
    color: "black";
    text-align: left;
    &:hover {
        border: 1px solid ${props => props.theme.subColor};
    }
    &:focus {
        border: 1px solid ${props => props.theme.mainColor};
        outline: none;
    }
    &::placeholder {
        color: ${props => props.theme.achromaticColor};
    }
`;

export default TYTextInput;
