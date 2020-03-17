/**
 * After storybook v5.3, They recommend use CSF(Component Story Format)
 * instead of using storiesof API
 */
import React from "react";
import Component from "./index";
import { withKnobs, text, boolean, select, color, number } from "@storybook/addon-knobs";

export default {
    title: "COMPONENTS|TY/TYToast",
    component: Component,
    decorators: [withKnobs]
};

const options = {
    topRight: "topRight",
    topLeft: "topLeft",
    bottomRight: "bottomRight",
    bottomLeft: "bottomLeft"
};

export const standard = () => {
    const textValue = text("text", "default value", "TY-TOAST-01");
    const isVisible = boolean("isVisible", true, "TY-TOAST-01");
    const position = select("position", options, options.bottomLeft, "TY-TOAST-01");
    const backgroundColor = color("backgroundColor", "#e03131", "TY-TOAST-01");
    const priority = number("priority", 0, {}, "TY-TOAST-01");

    return (
        <Component
            text={textValue}
            isVisible={isVisible}
            position={position as any}
            backgroundColor={backgroundColor}
            priority={priority}
        />
    );
};
