/**
 * After storybook v5.3, They recommend use CSF(Component Story Format)
 * instead of using storiesof API
 */
import React from "react";
import Component from "./index";
import { withKnobs, text } from "@storybook/addon-knobs";

export default {
    title: "COMPONENTS|Base/Button",
    component: Component,
    decorators: [withKnobs],
    parameter: {
        componentSubtitle: "Global common botton"
    }
};

export const standard = () => {
    const title = text("buttonText", "DEFAULT");
    return <Component>{title}</Component>;
};

export const disabled = () => {
    const title = text("buttonText", "DEFAULT");
    return <Component disabled={true}>{title}</Component>;
};
