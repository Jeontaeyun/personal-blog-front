import * as React from 'react';
import styled from 'styled-components';
import ProfileImage from '../../CommonComponents/ProfileImage';

interface Props {
  title?: string;
  description?: string;
  date?: string;
  img?: string;
}

const PostCard: React.SFC<Props> = props => {
  const { title, description, date } = props;
  return (
    <>
      <Card>
        <CardImage />
        <Description>
          <PositioningProfile size={'30px'} />
          <Title>{title}</Title>
          <Contents>{' ' + description}</Contents>
          <Date>{date}</Date>
        </Description>
      </Card>
    </>
  );
};

PostCard.defaultProps = {
  title: '최신포스트 제신포스트 제신포스트 제신포스트 제신포스트 제목',
  description: `이글은 최신 글입니다.이글은 최신 글이글은 최신 글입니다.
                  이글은 최신 글이글은 최신 글입니다.이글은 최신 글이글은 최신 글입니다.
                  이글은 최신 글이글은 최신 글입니다.이글은 최신 글이글은 최신 글입니다.이글은 
                  최신 글이글은 최신 글입니다.이글은 최신 글이글은 최신 글입니다.이글은 최신 글입
                  니다.이글은 최신 글입니다.이글은 최신 글입니다.이글은 최신 글입니다.이글은 최신 
                  글입니다.이글은 최신 글입니다.이글은 최신 글입니다.이글은 최신 글입니다.이글은 최
                  신 글입니다.`,
  date: '2017년 8월 1일',
};

const Card = styled.div`
  position: relative;
  width: 420px;
  height: 360px;
  background: white;
  margin-bottom: 3rem;
  border: 1px solid ${props => props.theme.achromaticColor};
  -webkit-box-shadow: -2px 10px 73px -39px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: -2px 10px 73px -39px rgba(0, 0, 0, 0.75);
  box-shadow: -2px 10px 73px -39px rgba(0, 0, 0, 0.75);
  transition: transform 500ms cubic-bezier(0.465, 0.183, 0.153, 0.946);
  cursor: pointer;
  &:hover {
    transform: scale(1.03);
  }
  @media (max-width: ${props => props.theme.smallPoint}) {
    width: 100%;
  }
`;

const CardImage = styled.div<Props>`
  height: 200px;
  width: 100%;
  background: url('/dummy.png');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
`;

const PositioningProfile = styled(ProfileImage)`
  position: absolute;
  top: -40px;
  right: 40px;
`;

const Description = styled.div`
  position: relative;
  margin: 0.8rem;
`;

const Title = styled.p`
  width: 100%;
  font-size: 1.2rem;
  text-overflow: ellipsis;
  white-space: nowrap;
  word-wrap: normal;
  overflow: hidden;
`;

const Contents = styled.p`
  width: 100%;
  font-size: 0.8rem;
  text-overflow: ellipsis;
  overflow: hidden;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  word-wrap: break-word;
  line-height: 1.2em;
  height: 3.6em;
`;
const Date = styled.p`
  display: absolute;
  margin-bottom: 0.3rem;
  right: 2rem;
  width: 100%;
  font-size: 0.6rem;
`;

export default PostCard;
