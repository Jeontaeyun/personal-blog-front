import React, { useRef, useCallback, useState, ChangeEvent } from "react";
import styled from "styled-components";

interface IProps {
    type: "text" | "password";
    value: any;
    onChange: (event: ChangeEvent<HTMLInputElement>) => void;
    label?: string;
    placeholder?: string;
    limit?: number;
    width?: string;
    outLineColor?: string;
    labelColor?: string;
    labelType?: "top" | "left";
}

const TYTextInput: React.FC<IProps> = props => {
    const { type, value, onChange, placeholder, limit, width, label, labelColor, labelType } = props;
    const [isFocus, setIsFocus] = useState(false);
    const inputRef = useRef<HTMLInputElement>(null);

    const _onChange = useCallback(
        (event: ChangeEvent<HTMLInputElement>) => {
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
            <Wrapper {...props}>
                <Container width={width} limit={limit}>
                    <Label labelColor={labelColor} labelType={labelType}>
                        {label}
                    </Label>
                    <Input
                        type={type}
                        ref={inputRef}
                        value={value}
                        placeholder={placeholder}
                        onChange={_onChange}
                        onFocus={_focusInput}
                        onBlur={_blurInput}
                        {...props}
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
    width: "200px",
    outLineColor: "#e03131",
    labelColor: "#000000",
    labelType: "top"
};

const Wrapper = styled.div<Partial<IProps>>`
    margin: 1rem;
    @media screen and (max-width: ${props => props.theme.mediumPoint}) {
        margin: 1rem auto;
        width: 96%;
    }
`;

const Container = styled.div<Partial<IProps> & { width: string }>`
    display: block;
    position: relative;
    width: ${props => props.width};
    @media screen and (max-width: ${props => props.theme.mediumPoint}) {
        width: ${props => props.limit * 3}%;
        margin: 0 auto;
    }
`;

const Label = styled.label<Partial<IProps>>`
    display: block;
    font-weight: 900;
    text-align: left;
    margin-bottom: 0.6rem;
    color: ${props => props.labelColor};
`;

const Input = styled.input<Partial<IProps>>`
    display: inline-block;
    padding: 0.8rem 1rem;
    width: 90%;
    border: 1px solid #dee2e6;
    border-radius: 0.2rem;
    font-weight: 700;
    color: black;
    text-align: left;
    &:hover {
        border: 1px solid ${props => props.outLineColor};
    }
    &:focus {
        border: 1px solid ${props => props.outLineColor};
        outline: none;
    }
    &::placeholder {
        color: #ced4da;
    }
`;

export default TYTextInput;
