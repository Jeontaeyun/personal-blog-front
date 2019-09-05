import * as React from "react";
import styled from 'styled-components';
import ProfileImage from "../ProfileImage";
import FooterList from "../FooterList";

interface Props{

}

const FooterComponent: React.SFC<Props> = (props) => {

  return (
    <>
      <InlineProfileImage size="150px"/>
      <FooterList/>
      <FooterList/>
      <FooterList/>
      <Copyright>Copyright © JeonTaeyun. All rights reserved.</Copyright>
    </>
  );
};

FooterComponent.defaultProps={

}

const Copyright = styled.div`
  position : absolute;
  bottom : 1rem;
  left : 1rem;
  color : white;
`;

const InlineProfileImage = styled(ProfileImage)`
  display: inline-block;
  vertical-align: top;
  margin-left: 3rem;
  margin-top: 3rem;
`;

export default FooterComponent;