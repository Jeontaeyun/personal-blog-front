/**
 * After storybook v5.3, They recommend use CSF(Component Story Format)
 * instead of using storiesof API
 */
import React from "react";
import Component from "./index";
import { withKnobs, text } from "@storybook/addon-knobs";

export default {
    title: "COMPONENTS|Common/FollowingNavigator",
    component: Component,
    decorators: [withKnobs],
    parameter: {
        componentSubtitle: "Global common botton"
    }
};

export const standard = () => {
    return <Component isView={true} />;
};
