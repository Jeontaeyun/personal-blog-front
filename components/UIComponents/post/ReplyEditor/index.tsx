import React, { useState, useCallback, useRef } from "react";
import styled from "styled-components";
import Button from "../../base/Button";
import ProfileImage from "components/UIComponents/base/ProfileImage";

interface IProps {}

const DEFAULT_HEIGHT = 60;
const FOCUS_HEIGHT = 100;

const ReplyEditor: React.FC<IProps> = props => {
    const [reply, setReply] = useState<string>("");
    const [height, setHeight] = useState<number>(DEFAULT_HEIGHT);
    const textRef = useRef<HTMLTextAreaElement>(null);
    const onChangeReply = useCallback(
        event => {
            const scrollHeight: number = textRef.current.scrollHeight;
            setReply(event.target.value);
            if (scrollHeight > 120) setHeight(scrollHeight);
            if (!reply.length) {
                setHeight(FOCUS_HEIGHT);
            }
        },
        [height, textRef, reply]
    );
    const onFocusReply = useCallback(
        (event: React.FocusEvent<HTMLTextAreaElement>) => {
            setHeight(FOCUS_HEIGHT);
        },
        [reply]
    );
    const onBlurReply = useCallback(
        e => {
            if (reply === "") {
                setHeight(60);
                setReply("댓글을 입력해주세요");
            }
        },
        [reply]
    );
    return (
        <>
            <ReplyContainer>
                <Title>00개 댓글</Title>
                <Profile size="30px" />
                <TextArea
                    ref={textRef}
                    rows={4}
                    value={reply}
                    placeholder={"댓글을 입력해주세요"}
                    height={height}
                    onChange={onChangeReply}
                    onFocus={onFocusReply}
                    onBlur={onBlurReply}
                >
                    {reply}
                </TextArea>
                <RightAlign>
                    <Button disabled={!!!reply}>댓글 작성</Button>
                </RightAlign>
            </ReplyContainer>
        </>
    );
};

ReplyEditor.defaultProps = {};

const ReplyContainer = styled.div`
    width: 98%;
    position: relative;
    margin: 3rem auto;
`;

const Title = styled.div`
    font-size: 1.2rem;
    font-weight: 600;
    margin-bottom: 2rem;
`;

const RightAlign = styled.div`
    position: absolute;
    right: 0;
    font-size: 0.8rem;
`;
const TextArea = styled.textarea<{ height: number }>`
    width: 100%;
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

const Profile = styled(ProfileImage)`
    position: absolute;
    border: none;
    right: 0;
    top: 0;
    cursor: pointer;
`;

export default ReplyEditor;
