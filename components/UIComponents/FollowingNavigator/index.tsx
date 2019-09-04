import * as React from "react";
import styled from 'styled-components';

interface Props{
  children? : React.FunctionComponent;
}

const FollowingNavigator: React.SFC<Props> = (props) => {
  const {children} = props;
  return (
    <>
       <Container>
        {children}
       </Container>
    </>
  );
};

FollowingNavigator.defaultProps={

}


const Container = styled.div<Props>`
    position: fixed;
    z-index: 200;
    width:100%;
    height:60px;
    top:0;
    left:0;
    background: white;
    -webkit-box-shadow: 0px 0px 58px 0px rgba(148,148,148,1);
    -moz-box-shadow: 0px 0px 58px 0px rgba(148,148,148,1);
    box-shadow: 0px 0px 58px 0px rgba(148,148,148,1);
`;

export default FollowingNavigator;