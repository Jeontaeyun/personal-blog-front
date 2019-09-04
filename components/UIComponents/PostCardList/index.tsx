import * as React from "react";
import styled from 'styled-components';
import PostCard from "../PostCard";
import Button from "../Button";

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
            <div style={{textAlign: "center"}}><Button>더보기+</Button></div>
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