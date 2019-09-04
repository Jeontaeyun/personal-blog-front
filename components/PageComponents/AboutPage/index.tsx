import * as React from "react";
import styled from 'styled-components';
import AboutCard from "@components/UIComponents/AboutCard";

interface Props{
  
}

const AboutPage: React.SFC<Props> = (props) => {
  return (
    <>
        <AboutCard/>
    </>
  );
};

AboutPage.defaultProps={

}

export default AboutPage;