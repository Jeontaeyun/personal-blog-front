import * as React from "react";
import styled from "styled-components";
import PostCard from "../PostCard";
import Button from "../../CommonComponents/Button";
import { IPost } from "interface/common/Post";

interface IProps {
    title: string;
    onClick?(): void;
    postList?: Array<Partial<IPost>>;
}

const PostCardList: React.FC<IProps> = props => {
    const { title, postList } = props;
    const postCards = postList.map((item, idx) => (
        <FlexCard
            image={item.thumbnailURL}
            title={item.title}
            description={item.description}
            date={item.createdAt}
            key={idx}
        />
    ));

    return (
        <>
            <Container>
                <Title>{title}</Title>
                <CardListContainer>{postCards}</CardListContainer>
                <div style={{ textAlign: "center" }}>
                    <Button>더보기+</Button>
                </div>
            </Container>
        </>
    );
};

PostCardList.defaultProps = {
    title: "카테고리",
    postList: [
        {
            title: "백엔드",
            description: "본문의 내용입니다.",
            createdAt: 124124
        },
        {
            title: "백엔드",
            description: "본문의 내용입니다.",
            createdAt: 12124
        },
        {
            title: "백엔드",
            description: "본문의 내용입니다.",
            createdAt: 2412
        }
    ]
};

const Container = styled.div`
    margin: 3rem auto;
    width: 100%;
    @media screen and (max-width: ${props => props.theme.mediumPoint}) {
        width: 98%;
    }
`;
const FlexCard = styled(PostCard)`
    flex: 1;
`;
const Title = styled.div`
    font-size: 1.5rem;
    margin-bottom: 2rem;
    font-weight: 900;
`;

const CardListContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    align-content: center;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: stretch;
    @media screen and (max-width: ${props => props.theme.mediumPoint}) {
        flex-direction: column;
        align-content: center;
    }
`;

export default PostCardList;
