import * as React from "react";
import { useState, useCallback } from "react";
import styled from "styled-components";
import ProfileImage from "../../base/ProfileImage";
import ReReply from "../ReReplyBox";

interface IProps {
    name?: string;
    description?: string;
    date?: string;
    isMe?: boolean;
    reple?: Array<{
        name: string;
        description: string;
        date: string;
    }>;
}

const ReplyBox: React.FC<IProps> = props => {
    const { description, name, date, isMe } = props;
    const reple = [{ name: "아이디", description: "대대슬 대댓글", date: "2018년 1월 3일" }];
    const [edit, setEdit] = useState<string>("");
    const onClickEdit = useCallback(
        event => {
            if (edit === "") setEdit(description);
            else setEdit("");
        },
        [description, edit]
    );
    const onClickDelete = useCallback(e => {}, []);
    const onChangeEdit = useCallback(e => {
        if (edit === "") setEdit(e.target.value);
    }, []);
    return (
        <>
            <ReplyBoxContainer>
                <ReplyProfileImage size="40px" />
                <TitleContainer>
                    <Title>{name}</Title>
                    <Date>{date}</Date>
                </TitleContainer>
                {!!!edit ? (
                    <>
                        <Description>{description}</Description>
                        <ReReply />
                    </>
                ) : (
                    <TextArea rows={4} value={edit} onChange={onChangeEdit}>
                        {edit}
                    </TextArea>
                )}
                <ButtonContainer>
                    {isMe && (
                        <>
                            <Button onClick={onClickEdit}>수정</Button>
                            <Button onClick={onClickDelete}>삭제</Button>
                        </>
                    )}
                </ButtonContainer>
            </ReplyBoxContainer>
        </>
    );
};

ReplyBox.defaultProps = {
    name: "아이디",
    description: "댓글이 있는 부분입니다. 댓글을 입력할 수 있습니다.",
    date: "2017년 07월 11일",
    reple: [],
    isMe: false
};

const ReplyBoxContainer = styled.div`
    width: 98%;
    box-sizing: border-box;
    position: relative;
    margin: 2rem auto;
    margin-top: 6rem;
    & + & {
        border-top: 1px solid ${props => props.theme.achromaticColor};
        margin-top: 2rem;
    }
`;

const TitleContainer = styled.div`
    display: inline-block;
    height: 30px;
    margin-left: 1rem;
    margin-bottom: 2rem;
`;

const Title = styled.div`
    font-size: 0.8rem;
    margin-bottom: 0.8rem;
`;

const Date = styled.div`
    font-size: 0.6rem;
    color: #868e96;
`;

const ReplyProfileImage = styled(ProfileImage)`
    display: inline-block;
    border: none;
    margin-top: 1rem;
    cursor: pointer;
`;

const Description = styled.div`
    font-size: 1rem;
`;

const ButtonContainer = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    font-size: 0.3rem;
    margin-bottom: 1rem;
`;

const Button = styled.div<{ disabled?: boolean }>`
    display: inline-block;
    text-align: center;
    font-size: 0.5rem;
    margin: 1rem 0.2rem;
    padding: 0.3rem 0.8rem;
    border: 1px solid ${props => props.theme.mainColor};
    border-radius: 0.6rem;
    font-weight: 700;
    color: ${props => props.theme.mainColor};
    cursor: ${props => (props.disabled ? "not-allowed" : "pointer")};
`;

const TextArea = styled.textarea`
    display: block;
    width: 100%;
    box-sizing: border-box;
    height: 150px;
    border: 1px solid ${props => props.theme.achromaticColor};
    border-radius: 1px;
    resize: none;
    padding: 1rem;
    font-size: 1rem;
    overflow-wrap: break-word;
    overflow: scroll;
    &:focus {
        outline: none;
    }
`;

const ReReplyContainer = styled.div`
    width: 90%;
    margin-top: 1rem;
    margin-left: 2rem;
`;

export default ReplyBox;
