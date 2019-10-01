import * as React from 'react';
import AboutCard from '@components/UIComponents/CommonComponents/AboutCard';

interface Props {}

const AboutPage: React.SFC<Props> = props => {
  return (
    <>
      <AboutCard />
    </>
  );
};

AboutPage.defaultProps = {};

export default AboutPage;
