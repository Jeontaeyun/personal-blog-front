/**
 * After storybook v5.3, They recommend use CSF(Component Story Format)
 * instead of using storiesof API
 */
import React from "react";
import Component from "./index";

export default {
  title: "COMPONENTS|Common/Button",
  component: Component,
  parameter:{
    componentSubtitle: "Global common botton"
  }
};


export const standard = () => <Component />;
export const disabled = () => <Component disabled={true} />;
