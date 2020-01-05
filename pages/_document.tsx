import React from "react";
import Document, { Main, NextScript, DocumentContext } from "next/document";
import { ServerStyleSheet } from "styled-components";
import Helmet from "react-helmet";
class MyDocument extends Document<{ helmet: any }> {
  static async getInitialProps(context: DocumentContext) {
    const sheet = new ServerStyleSheet();
    try {
      context.renderPage(App => props =>
        sheet.collectStyles(<App {...props} />),
      );
      const initialProps = await Document.getInitialProps(context);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
        helmet: Helmet.renderStatic(),
      };
    } finally {
      sheet.seal();
    }
  }

  render() {
    const { htmlAttributes, bodyAttributes, ...helmet } = this.props.helmet;
    const htmlAttrs = htmlAttributes.toComponent();
    const bodyAttrs = bodyAttributes.toComponent();
    return (
      <html {...htmlAttrs}>
        <head>{this.props.styles}</head>
        <body {...bodyAttrs}>
          <Main />
          <NextScript></NextScript>
        </body>
      </html>
    );
  }
}

export default MyDocument;
