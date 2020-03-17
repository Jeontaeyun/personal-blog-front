import * as React from "react";
import styled from "styled-components";
interface IProps {
    size: string;
    onClick?(): void;
}

const ProfileImage: React.FC<IProps> = props => {
    const { onClick } = props;
    return (
        <>
            <Profile onClick={onClick} {...props} />
        </>
    );
};

ProfileImage.defaultProps = {
    onClick: () => {},
    size: "100px"
};

const Profile = styled.div<IProps>`
    width: ${props => props.size};
    height: ${props => props.size};
    border-radius: 100%;
    background: url("/dummy.png");
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    border: 3px solid white;
`;

export default ProfileImage;
