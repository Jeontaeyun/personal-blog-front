/**
 * After storybook v5.3, They recommend use CSF(Component Story Format)
 * instead of using storiesof API
 */
import React from "react";
import Component from "./index";
import { withKnobs, boolean } from "@storybook/addon-knobs";
import centered from "@storybook/addon-centered";

export default {
    title: "COMPONENTS|Common/LoadingSpinner",
    component: Component,
    decorators: [withKnobs, centered],
    parameter: {
        componentSubtitle: "Global common botton"
    }
};

export const standard = () => {
    const isLoading = boolean("isLoading", true);
    return <Component isLoading={isLoading} />;
};
