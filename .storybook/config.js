import * as React from "react";
import { configure, addDecorator } from "@storybook/react";
import { ThemeProvider } from "styled-components";
import theme from "../styles/theme";
import GlobalStyles from "../styles/globalStyle";
import centered from "@storybook/addon-centered/react";

const req = require.context("../components", true, /\.stories\.(tsx)$/);

const withGlobal = cb => {
    return (
        <ThemeProvider theme={theme}>
            <>
                <GlobalStyles />
                {cb()}
            </>
        </ThemeProvider>
    );
};

addDecorator(withGlobal);
configure(req, module);
