import React from 'react';
import Document, {Main, NextScript, DocumentContext} from 'next/document';
import {ServerStyleSheet} from 'styled-components';

class MyDocument extends Document {
    static async getInitialProps(context: DocumentContext){
        const sheet = new ServerStyleSheet();
        const originalRenderPage = context.renderPage;
        try{
            context.renderPage((App) => (props) => sheet.collectStyles(<App {...props}/>));
            const initialProps = await Document.getInitialProps(context);
            return {...initialProps, styles: (<>{initialProps.styles}{sheet.getStyleElement()}</>)};
        }
        finally{
            sheet.seal();
        }
    };

    render() {
        return(
            <html>
                <head>
                    {this.props.styles}
                </head>
                <body>
                    <Main/>
                    <NextScript></NextScript>
                </body>
            </html>
        );
    }; 
} 

export default MyDocument;