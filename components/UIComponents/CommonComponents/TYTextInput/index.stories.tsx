/**
 * After storybook v5.3, They recommend use CSF(Component Story Format)
 * instead of using storiesof API
 */
import React from "react";
import Component from "./index";
import { withKnobs, text, number } from "@storybook/addon-knobs";
import { useCallback, useState } from "@storybook/addons";
import { action } from "@storybook/addon-actions";

export default {
    title: "COMPONENTS|TY/TYTextInput",
    component: Component,
    decorators: [withKnobs]
};

export const standard = () => {
    const [value, setValue] = useState("");
    const placeholder = text("placeholder", "placeholder");
    const width = text("width", "200px");
    const limit = number("limit", 10);

    const onChange = useCallback(
        (event: any) => {
            setValue(event.target.value);
            action("onChange value");
        },
        [action]
    );
    return <Component value={value} width={width} limit={limit} onChange={onChange} placeholder={placeholder} />;
};

export const actionTest = () => {
    const [value, setValue] = useState("");
    const placeholder = text("placeholder", "placeholder");
    return <Component value={value} onChange={action("onChange")} placeholder={placeholder} />;
};
