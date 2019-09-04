import * as React from "react";
import styled from 'styled-components';
import PostCard from "../PostCard";

interface Props{
    title: string;
    onClick?(): void;
    postList?: any[]; 
};

const PostCardList : React.SFC<Props> = (props) => {
    const {title, postList, onClick} = props;
    return (
        <>
        <Container>
            <Title>{title}</Title>
            <CardListContainer>
                {postList.map((item,idx) => <FlexCard key={idx}/>)}
            </CardListContainer>
            <div style={{textAlign: "center"}}><PlusButton onClick={onClick}>더보기+</PlusButton></div>
        </Container>
    </>
    );
};

PostCardList.defaultProps = {
    title: "카테고리",
    postList: [1,2,3]
}

const Container = styled.div`
    margin: 6rem 0;
`;
const FlexCard = styled(PostCard)`
    flex:1;
`;
const Title = styled.p`
    font-size: 1.5rem;
`;

const PlusButton = styled.div`
    display: inline-block;
    text-align: center;
    margin:2rem auto;
    padding: 1rem;
    background: linear-gradient(45deg, #e45d4c,#eead9e);
    border-radius: 3rem;
    font-weight: 700;
    color: white;
    cursor:pointer;
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