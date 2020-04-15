import * as React from "react";
import IndexPage from "components/PageComponents/IndexPage";
import { NextPage } from "next";

interface IProps {}

const Index: NextPage<IProps> = () => {
    return (
        <>
            <IndexPage />
        </>
    );
};

export default Index;
