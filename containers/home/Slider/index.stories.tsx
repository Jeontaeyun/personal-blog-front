import React from "react";
import Component from "./index";
import { withKnobs, text, object } from "@storybook/addon-knobs";

export default {
    title: "CONTAINERS|Base/Slider",
    component: Component,
    decorators: [withKnobs],
    parameter: {
        componentSubtitle: "component sub title"
    }
};

export const standard = () => {
    return <Component />;
};
