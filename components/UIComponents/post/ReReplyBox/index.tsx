import * as React from "react";
import { useState, useCallback } from "react";
import styled from "styled-components";

interface IProps {}

const ReReply: React.FC<IProps> = () => {
    const [view, isView] = useState<boolean>(false);
    const [reReply, setReReply] = useState<string>("");
    const onClickReView = useCallback(
        event => {
            isView(!view);
        },
        [view]
    );
    const onClickReply = useCallback(
        event => {
            isView(false);
        },
        [view]
    );
    const onChangeReReply = useCallback((event: any) => {
        setReReply(event.target.value);
    }, []);
    const ReplyEditor = (
        <>
            <TextArea onChange={onChangeReReply} height={100}>
                {reReply}
            </TextArea>
            <ReplyButtonContainer>
                <Button onClick={onClickReply}>댓글 작성</Button>
            </ReplyButtonContainer>
        </>
    );
    return (
        <>
            <ReReplyContainer onClick={onClickReView}>
                <Button>+</Button>
                <Reply>답글 달기</Reply>
            </ReReplyContainer>
            {view && ReplyEditor}
        </>
    );
};

ReReply.defaultProps = {};

const ReReplyContainer = styled.div`
    width: 90%;
    margin-top: 1rem;
    margin-left: 2rem;
    cursor: pointer;
`;

const Reply = styled.span`
    font-size: 0.8rem;
    color: ${props => props.theme.color.main};
    margin-left: 0.5rem;
`;

const Button = styled.div`
    display: inline-block;
    text-align: center;
    font-size: 0.5rem;
    margin: 1rem 0.2rem;
    padding: 0.3rem 0.8rem;
    border: 1px solid ${props => props.theme.color.main};
    border-radius: 0.6rem;
    font-weight: 700;
    color: ${props => props.theme.color.main};
    cursor: pointer;
`;

const ReplyButtonContainer = styled.div`
    text-align: right;
    width: 90%;
    margin-left: 2.8rem;
`;

const TextArea = styled.textarea<{ height: number }>`
    display: block;
    width: 90%;
    margin-top: 1rem;
    margin-left: 2.5rem;
    box-sizing: border-box;
    height: ${props => props.height + "px"};
    border: 1px solid ${props => props.theme.color.achromatic};
    border-radius: 1px;
    resize: none;
    padding: 1rem;
    font-size: 1rem;
    overflow-wrap: break-word;
    max-height: 280px;
    overflow: scroll;
    &:focus {
        outline: none;
    }
`;

export default ReReply;
