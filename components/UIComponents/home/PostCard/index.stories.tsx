/**
 * After storybook v5.3, They recommend use CSF(Component Story Format)
 * instead of using storiesof API
 */
import React from "react";
import Component from "./index";
import { withKnobs, text, date, object } from "@storybook/addon-knobs";

export default {
    title: "COMPONENTS|Common/PostCard",
    component: Component,
    decorators: [withKnobs],
    parameters: {
        componentSubtitle: "Main component for render post in post, main page"
    }
};

export const standard = () => {
    const title = text("title", "This is Title");
    const description = text("description", "This is Title");
    const writedDate = date("date", new Date("2019-12-20"));
    const image = text(
        "image",
        "https://images.unsplash.com/photo-1499084732479-de2c02d45fcc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"
    );
    const tag01 = object("tag01", {
        name: "Javascript",
        id: "1"
    });
    const tag02 = object("tag02", {
        name: "Docker",
        id: "1"
    });
    const tag03 = object("tag03", {
        name: "Front",
        id: "1"
    });

    return (
        <Component
            title={title}
            description={description}
            date={writedDate}
            image={image}
            tags={[tag01, tag02, tag03]}
        />
    );
};
