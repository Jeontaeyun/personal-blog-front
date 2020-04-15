import React from "react";
import Component from "./index";
import { withKnobs, text } from "@storybook/addon-knobs";

export default {
    title: "COMPONENTS|Post/ShareInfo",
    component: Component,
    decorators: [withKnobs],
    parameter: {
        componentSubtitle: "Global common botton"
    }
};

export const standard = () => {
    return <Component visible={true} />;
};
