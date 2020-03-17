import "moment/locale/ko";

import moment from "moment";
import React from "react";
import styled from "styled-components";
import { ITag } from "types/common/Tag";

import ProfileImage from "../../base/ProfileImage";

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
        return tags.map(tag => <Tag key={tag.id}>{tag.name.slice(0, 12)}</Tag>);
    };

    return (
        <>
            <Card>
                <TagConatiner>{renderTag()}</TagConatiner>
                <CardImage image={image}>
                    <PositioningProfile size={"40px"} />
                </CardImage>
                <Description>
                    <Title>{title}</Title>
                    <Date>{moment(date).format("YYYY년 MM월 DD일")}</Date>
                    <Contents>{" " + description}</Contents>
                </Description>
            </Card>
        </>
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

const Card = styled.div`
	) {
		height: 430px;
		margin-bottom: 1rem;
		padding: 0 5px;
		width: 50%;
	}
	) {
		height: 430px;
		margin-bottom: 4rem;
		padding: 0;
		width: 100%;
	}
	background: white;
	box-sizing: border-box;
	cursor: pointer;
	height: 400px;
	margin-bottom: 1rem;
	padding: 0 5px;
	position: relative;
	width: 33%;
	
	@media screen and (max-width: ${props => props.theme.mediumPoint}
	
	@media screen and (max-width: ${props => props.theme.widePoint}
`;

const CardImage = styled.div<IProps>`
	) {
		height: 250px;
		width: 100%;
	}
	);
	background-position: center center;
	background-repeat: no-repeat;
	background-size: cover;
	background: url(${props => props.image || "/dummy.png"}
	border-radius: ${props => props.theme.BORDER_RADIUS};
	height: 200px;
	position: relative;
	width: 100%;
	
	@media screen and (max-width: ${props => props.theme.mediumPoint}
`;

const PositioningProfile = styled(ProfileImage)`
    bottom: -20px;
    position: absolute;
    right: 40px;
`;

const TagConatiner = styled.div`
    height: 30px;
    margin: 0 1rem;
    width: 100%;
`;

const Tag = styled.span`
    border-radius: 100px;
    border: 0.6px solid #ced4da;
    color: ${props => props.theme.mainColor};
    font-size: 0.8rem;
    font-weight: 800;
    height: 30px;
    margin-right: 0.6rem;
    padding: 0.2rem 1rem;
    text-align: center;
    width: auto;
`;

const Description = styled.div`
    margin: 0 0.8rem;
    position: relative;
`;

const Title = styled.p`
    font-size: 1.2rem;
    font-weight: 900;
    margin-bottom: 0;
    margin-top: 1.6rem;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    width: 100%;
    word-wrap: normal;
`;

const Contents = styled.p`
    color: #343a40;
    font-size: 0.8rem;
    font-weight: 600;
    height: 4.8em;
    line-height: 1.6em;
    overflow: hidden;
    text-overflow: ellipsis;
    width: 100%;
    word-wrap: break-word;

    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
`;
const Date = styled.p`
    color: #343a40;
    font-size: 0.6rem;
    width: 100%;
`;

export default PostCard;
