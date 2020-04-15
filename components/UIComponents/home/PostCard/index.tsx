import "moment/locale/ko";

import moment from "moment";
import React from "react";
import styled from "styled-components";
import { ITag } from "types/common/Tag";

import ProfileImage from "../../base/ProfileImage";
import Badge from "components/UIComponents/base/Badge";

interface IProps {
    /**Title for post card */
    title?: string;
    /**Description for post card */
    description?: string;
    /**Registered date for post card */
    date?: number;
    /**Thumbnail image for post card */
    image?: string;
    /**Tags for post card */
    tags?: Array<ITag>;
}

/**
 * PostCard for list
 */
const PostCard: React.FC<IProps> = props => {
    const { title, description, date, image, tags } = props;
    const renderTag = () => {
        return tags.map(tag => <Badge key={tag.id}>{tag.name.slice(0, 12)}</Badge>);
    };

    return (
        <Container>
            <TagConatiner>{renderTag()}</TagConatiner>
            <CardImage image={image}>
                <PositioningProfile size={"40px"} />
            </CardImage>
            <Description>
                <Title>{title}</Title>
                <Date>{moment(date).format("YYYY년 MM월 DD일")}</Date>
                <Contents>{" " + description}</Contents>
            </Description>
        </Container>
    );
};

PostCard.defaultProps = {
    title: "최신포스트 제신포스트 제신포스트 제신포스트 제신포스트 제목",
    description: `이글은 최신 글입니다.이글은 최신 글이글은 최신 글입니다.
                  이글은 최신 글이글은 최신 글입니다.이글은 최신 글이글은 최신 글입니다.
                  이글은 최신 글이글은 최신 글입니다.이글은 최신 글이글은 최신 글입니다.이글은 
                  최신 글이글은 최신 글입니다.이글은 최신 글이글은 최신 글입니다.이글은 최신 글입
                  니다.이글은 최신 글입니다.이글은 최신 글입니다.이글은 최신 글입니다.이글은 최신 
                  글입니다.이글은 최신 글입니다.이글은 최신 글입니다.이글은 최신 글입니다.이글은 최
                  신 글입니다.`,
    date: 12323,
    tags: [
        { name: "Javascript", id: "1" },
        { name: "Backend", id: "2" },
        { name: "Docker", id: "3" }
    ]
};

const Container = styled.div`
    display: inline-block;
    cursor: pointer;
    position: relative;
    width: 420px;
    height: 400px;
    background: white;
    margin-bottom: 3rem;
    box-sizing: border-box;
    padding: 10px;
    @media screen and (max-width: ${props => props.theme.mediumPoint}) {
        height: 430px;
        width: 100%;
        margin-bottom: 4rem;
    }
`;

const CardImage = styled.div<IProps>`
    position: relative;
    width: 100%;
    height: 200px;
    border-radius: ${props => props.theme.BORDER_RADIUS};
    background: url(${props => props.image || "/dummy.png"});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;
    @media screen and (max-width: ${props => props.theme.mediumPoint}) {
        width: 100%;
        height: 250px;
    }
`;

const PositioningProfile = styled(ProfileImage)`
    position: absolute;
    bottom: -20px;
    right: 40px;
`;

const TagConatiner = styled.div`
    width: 100%;
    height: 30px;
`;

const Description = styled.div`
    position: relative;
    margin: 0 0.8rem;
`;

const Title = styled.p`
    width: 100%;
    font-size: 1.2rem;
    font-weight: 900;
    text-overflow: ellipsis;
    white-space: nowrap;
    word-wrap: normal;
    overflow: hidden;
    margin-top: 1.6rem;
    margin-bottom: 0;
`;

const Contents = styled.p`
    width: 100%;
    color: #343a40;
    font-size: 0.8rem;
    font-weight: 600;
    text-overflow: ellipsis;
    overflow: hidden;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    word-wrap: break-word;
    line-height: 1.6em;
    height: 4.8em;
`;
const Date = styled.p`
    font-size: 0.6rem;
    color: #343a40;
    width: 100%;
`;

export default PostCard;
