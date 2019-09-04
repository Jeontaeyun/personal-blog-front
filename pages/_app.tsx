import * as React from "react";
import AppLayout from "@components/UIComponents/AppLayout";
import {Container} from 'next/app'

interface Props {
    Component: React.FunctionComponent;
    pageProps: any;
}

const Index: React.SFC<Props> = ({Component, pageProps}) => {
  return (
    <Container style= {{margin:0}}>
      <AppLayout HeaderContents="w" MainContents="f" FooterContents="c">
        <Component {...pageProps}/>
      </AppLayout>
    </Container>
  );
};

export default Index;