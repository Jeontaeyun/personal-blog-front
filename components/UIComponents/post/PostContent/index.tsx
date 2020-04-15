import * as React from "react";
import styled from "styled-components";
import PostIndicator from "../PostIndicator";
import ShareInfo from "../ShareInfo";
import ReplyEditor from "../ReplyEditor";
import ReplyBox from "../ReplyBox";
import PostCardList from "containers/home/PostCardList";

interface IProps {
    post?: {
        id: string;
        title: string;
        description: string;
    };
    reply?: Array<{
        id: string;
        name: string;
        description: string;
    }>;
}

const PostContent: React.FC<IProps> = props => {
    const { post } = props;
    const { title, description, id } = post;
    console.log(post);
    return (
        <>
            <PostIndicator />
            <ShareInfo />
            <PostContainer>
                <Title>{title}</Title>
                {description}
                <ReplyEditor />
                <ReplyBox />
                <ReplyBox />
                <ReplyBox />
                <PostCardList title="해당 카테고리 다른글" />
            </PostContainer>
        </>
    );
};

PostContent.defaultProps = {};

const PostContainer = styled.div`
    width: 60%;
    margin: 1rem auto;
    @media screen and (max-width: ${props => props.theme.mediumPoint}) {
        width: 80%;
    }
`;

const Title = styled.div`
    font-size: 2.4rem;
    font-weight: 900;
    margin: 1rem 0;
`;

export default PostContent;
