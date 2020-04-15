import * as React from "react";
import PostCardList from "containers/home/PostCardList";
import styled from "styled-components";
import Modal from "components/UIComponents/base/modal/Modal";

interface IProps {
    category?: string[];
}

const IndexPage: React.FC<IProps> = props => {
    const { category } = props;
    const postList = category.map((item, idx) => <PostCardList title={item} key={idx} />);
    return (
        <>
            <Container>
                <Modal />
                {postList}
            </Container>
        </>
    );
};

IndexPage.defaultProps = {
    category: ["프론트엔드", "백엔드", "디자이너"]
};

const Container = styled.div`
    width: 80%;
    margin: 1rem auto;
    @media screen and (max-width: ${props => props.theme.mediumPoint}) {
        width: 96%;
    }
`;

export default IndexPage;
