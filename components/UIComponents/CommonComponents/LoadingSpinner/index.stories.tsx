/**
 * After storybook v5.3, They recommend use CSF(Component Story Format)
 * instead of using storiesof API
 */
import React from "react";
import Component from "./index";
import { withKnobs, boolean } from "@storybook/addon-knobs";

export default {
    title: "COMPONENTS|Common/LoadingSpinner",
    component: Component,
    decorator: [withKnobs],
    parameter: {
        componentSubtitle: "Global common botton"
    }
};

export const standard = () => {
    const isLoading = boolean("isLoading", false);
    return <Component isLoading={isLoading} />;
};
