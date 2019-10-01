import * as React from 'react';
import styled from 'styled-components';

interface Props {}

const FooterCopy: React.SFC<Props> = props => {
  return (
    <>
      <Copyright>Copyright © JeonTaeyun. All rights reserved.</Copyright>
    </>
  );
};

FooterCopy.defaultProps = {};

const Copyright = styled.div`
  font-size: 0.5rem;
  padding-left: 1rem;
  color: white;
`;

export default FooterCopy;
