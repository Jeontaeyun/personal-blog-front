/**
 * After storybook v5.3, They recommend use CSF(Component Story Format)
 * instead of using storiesof API
 */
import React from "react";
import Component from "./index";
import { withKnobs, text, boolean } from "@storybook/addon-knobs";

export default {
    title: "COMPONENTS|TY/TYToast",
    component: Component,
    decorators: [withKnobs]
};

export const standard = () => {
    const textValue = text("text", "default value", "TY-TOAST-01");
    const isVisible = boolean("isVisibe", true, "TY-TOAST-01");
    return <Component text={textValue} isVisible={isVisible} />;
};
