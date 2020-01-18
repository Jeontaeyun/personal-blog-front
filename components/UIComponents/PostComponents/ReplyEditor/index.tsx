import * as React from "react";
import { useState, useCallback, useRef } from "react";
import styled from "styled-components";
import Button from "../../CommonComponents/Button";
import ProfileImage from "components/UIComponents/CommonComponents/ProfileImage";

interface Props {}

const ReplyEditor: React.SFC<Props> = props => {
    const [reply, setReply] = useState<string>("댓글을 입력해주세요");
    const [height, setHeight] = useState<number>(60);
    const textRef = useRef<HTMLTextAreaElement>(null);
    const onChangeReply = useCallback(
        event => {
            const scrollHeight: number = textRef.current.scrollHeight;
            setReply(event.target.value);
            if (scrollHeight > 120) setHeight(scrollHeight);
        },
        [height, textRef]
    );
    const onFocusReply = useCallback(
        event => {
            if (reply === "댓글을 입력해주세요") {
                setHeight(100);
                setReply("");
            }
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
    border: 1px solid ${props => props.theme.achromaticColor};
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
