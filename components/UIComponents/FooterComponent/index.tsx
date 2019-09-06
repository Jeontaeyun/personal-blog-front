import * as React from "react";
import styled from 'styled-components';
import ProfileImage from "../ProfileImage";
import FooterList from "../FooterList";

interface Props{

}

const FooterComponent: React.SFC<Props> = (props) => {

  return (
    <>
      <Copyright>Copyright © JeonTaeyun. All rights reserved.</Copyright>
    </>
  );
};

FooterComponent.defaultProps={

}

const Copyright = styled.div`
  font-size: 0.5rem;
  color : white;
`;

export default FooterComponent;