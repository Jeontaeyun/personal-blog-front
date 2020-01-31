/**
 * After storybook v5.3, They recommend use CSF(Component Story Format)
 * instead of using storiesof API
 */
import React from "react";
import Component from "./index";
import { withKnobs, text, number, select, color } from "@storybook/addon-knobs";
import { useCallback, useState } from "@storybook/addons";
import { action } from "@storybook/addon-actions";

export default {
    title: "COMPONENTS|TY/TYTextInput",
    component: Component,
    decorators: [withKnobs]
};

export const standard = () => {
    const [value, setValue] = useState("");

    const options = {
        text: "text",
        password: "password"
    };

    const defaultValue = options.text;

    const type = select("type", options, defaultValue, "TY-TEXTINPUT-01");
    const placeholder = text("placeholder", "12자 이상의 아이디를 입력하세요", "TY-TEXTINPUT-01");
    const label = text("label", "아이디", "TY-TEXTINPUT-01");
    const width = text("width", "200px", "TY-TEXTINPUT-01");
    const limit = number("limit", 10, {}, "TY-TEXTINPUT-01");
    const labelColor = color("labelColor", "", "TY-TEXTINPUT-01");
    const outlineColor = color("outlineColor", "", "TY-TEXTINPUT-01");

    const onChange = useCallback(
        (event: any) => {
            setValue(event.target.value);
            action("onChange value");
        },
        [action]
    );

    return (
        <Component
            type={type as any}
            label={label}
            value={value}
            width={width}
            limit={limit}
            onChange={onChange}
            placeholder={placeholder}
            labelColor={labelColor}
            outLineColor={outlineColor}
        />
    );
};

export const actionTest = () => {
    const [value, setValue] = useState("");
    const placeholder = text("placeholder", "아이디");

    return <Component type={"text"} value={value} onChange={action("onChange")} placeholder={placeholder} />;
};
