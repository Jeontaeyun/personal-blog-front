import { NextPage } from "next";
import * as React from "react";
import AboutPage from "components/PageComponents/AboutPage";

interface IProps {}

const about: NextPage<IProps> = () => {
    return <AboutPage />;
};

export default about;
