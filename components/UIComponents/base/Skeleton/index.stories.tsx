import React from "react";
import Component from "./index";
import { withKnobs, text } from "@storybook/addon-knobs";
import styled from "styled-components";

export default {
    title: "COMPONENTS|Common/Skeleton",
    component: Component,
    decorators: [withKnobs],
    parameter: {
        componentSubtitle: "Skeleton UI for async rener"
    }
};

export const standard = () => {
    return (
        <Container>
            <Component />
        </Container>
    );
};

const Container = styled.div`
    width: 240px;
    height: 30px;
`;
