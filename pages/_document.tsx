import React from "react";
import Document, { Head, Main, NextScript, DocumentContext } from "next/document";
import { ServerStyleSheet } from "styled-components";
import Helmet from "react-helmet";
class MyDocument extends Document<{ helmet: any }> {
    static async getInitialProps(context: DocumentContext) {
        const sheet = new ServerStyleSheet();
        try {
            context.renderPage(App => props => sheet.collectStyles(<App {...props} />));
            const styleTags = sheet.getStyleElement();
            const initialProps = await Document.getInitialProps(context);
            return {
                ...initialProps,
                styles: (
                    <>
                        {initialProps.styles}
                        {styleTags}
                    </>
                ),
                helmet: Helmet.renderStatic()
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
                <Head>
                    {this.props.styles}
                    <meta charSet="utf-8" />
                    <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                </Head>
                <body {...bodyAttrs}>
                    <Main />
                    <NextScript />
                </body>
            </html>
        );
    }
}

export default MyDocument;
