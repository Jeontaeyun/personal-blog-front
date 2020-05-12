import * as React from "react";
import styled from "styled-components";
import PostCard from "components/UIComponents/home/PostCard";
import Button from "components/UIComponents/base/Button";
import { IPost } from "types/common/Post";

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
                <ShowMoreButtonContainer>
                    <Button>{"더보기 + "}</Button>
                </ShowMoreButtonContainer>
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
        },
        {
            title: "백엔드",
            description: "본문의 내용입니다.",
            createdAt: 2412
        },
        {
            title: "백엔드",
            description: "본문의 내용입니다.",
            createdAt: 2412
        },
        {
            title: "백엔드",
            description: "본문의 내용입니다.",
            createdAt: 2412
        }
    ]
};

const Container = styled.div`
    width: 100%;
    margin: 3rem auto;
    @media screen and (max-width: ${props => props.theme.mediumPoint}) {
        width: 98%;
    }
`;

const FlexCard = styled(PostCard)``;

const Title = styled.div`
    font-size: 1.5rem;
    margin-bottom: 2rem;
    font-weight: 900;
`;

const CardListContainer = styled.div`
    display: relative;
    width: 100%;
    align-content: center;
    @media screen and (max-width: ${props => props.theme.mediumPoint}) {
        flex-direction: column;
        align-content: center;
    }
`;

const ShowMoreButtonContainer = styled.div`
    text-align: center;
`;

export default PostCardList;
