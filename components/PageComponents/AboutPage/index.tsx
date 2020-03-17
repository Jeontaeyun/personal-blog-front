import * as React from "react";
import AboutCard from "components/UIComponents/base/AboutCard";

interface IProps {}

const AboutPage: React.FC<IProps> = props => {
    return (
        <>
            <AboutCard />
        </>
    );
};

AboutPage.defaultProps = {};

export default AboutPage;
