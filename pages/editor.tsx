import * as React from "react";
import EditorPage from "components/PageComponents/EditorPage";
import { NextPage } from "next";

interface IProps {}

const Index: NextPage<IProps> = () => {
  return (
    <>
      <EditorPage />
    </>
  );
};

export default Index;
