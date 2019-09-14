import * as React from "react";
import styled from 'styled-components';
import PostCard from "../PostCard";
import Button from "../Button";

interface Props{
    title: string;
    onClick?(): void;
    postList?: { "title" :string , "description" : string , "date": string }[];
};

const PostCardList : React.SFC<Props> = (props) => {
    const {title, postList} = props;
    return (
        <>
        <Container>
            <Title>{title}</Title>
            <CardListContainer>
                {postList.map((item,idx) => <FlexCard title={item.title} description={item.description} date={item.date} key={idx}/>)}
            </CardListContainer>
            <div style={{textAlign: "center"}}><Button>더보기+</Button></div>
        </Container>
    </>
    );
};

PostCardList.defaultProps = {
    title: "카테고리",
    postList: [{title: "백엔드", description: "본문의 내용입니다.", date:"2017년 01월 02일"},{title: "백엔드", description: "본문의 내용입니다.", date:"2017년 01월 02일"},{title: "백엔드", description: "본문의 내용입니다.", date:"2017년 01월 02일"}]
}

const Container = styled.div`
    margin: 6rem auto;
    width: 100%;
    @media (max-width: 800px){
        width: 90%;
    }
`;
const FlexCard = styled(PostCard)`
    flex:1;
`;
const Title = styled.div`
    font-size: 1.5rem;
    margin-bottom: 2rem;
    font-weight: 600;
`;

const CardListContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    align-content: center;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: stretch;
    @media (max-width: 800px){
        flex-direction: column;
        align-content: center;
    }
`;

export default PostCardList;