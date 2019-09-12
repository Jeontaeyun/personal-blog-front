import * as React from "react";
import {useState, useCallback,useRef} from "react";
import styled from 'styled-components';
import Button from "../Button";

interface Props{
    
}

const Reply: React.SFC<Props> = (props) => {
    const [reply, setReply] = useState<string>("댓글을 입력해주세요");
    const [height, setHeight] = useState<number>(30);
    const textRef = useRef<HTMLInputElement>(null);
    const onChangeReply = useCallback((e)=>{
        setReply(e.target.value);
    },[height, textRef]);
    const onKeyDownReply = useCallback((e) => {
        //setHeight(textRef.current.scrollHeight);
        console.log(textRef.current.scrollHeight);
    },[]);
    const onFocusReply = useCallback((e) => {
        if(reply === "댓글을 입력해주세요"){
            setHeight(50);
            setReply("");
        }
    },[reply]);
    const onBlurReply = useCallback((e) => {
        if(reply === "") {
            setHeight(30);
            setReply("댓글을 입력해주세요");
        }
    },[reply]);
    return (
        <>
            <ReplyContainer>
                <Title>00개 댓글</Title>
                <TextArea
                            ref = {textRef}
                            row = "4"
                            value={reply} 
                            height={height} 
                            onChange={onChangeReply} 
                            onKeyDown={onKeyDownReply}
                            onFocus={onFocusReply}
                            onBlur={onBlurReply}>
                            {reply}
                </TextArea>
                <Button>댓글 작성</Button>
            </ReplyContainer>
        </>
  );
};

Reply.defaultProps={
    color: "#e45d4c"
}

const ReplyContainer = styled.div`
    width: 98%;
    position: relative;
    margin: 2rem auto;
`;

const Title = styled.div`
    font-size: 1.2rem;
    font-weight: 600;
    margin-bottom: 2rem;
`;

const TextArea = styled.textarea`
    width: 100%;
    height:${props=>props.height+"px"};
    border: 1px solid ${props=>props.theme.achromaticColor};
    border-radius: 1px;
    resize: none;
    padding:1rem;
    font-size: 1rem;
    overflow-wrap: break-word;
    max-height: 280px;
    overflow: scroll;
    &:focus{
        outline: none;
    }
`;

export default Reply;