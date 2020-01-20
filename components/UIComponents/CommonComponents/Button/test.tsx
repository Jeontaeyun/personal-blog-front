import * as React from "react";
import Button from "./index";
import renderer from "react-test-renderer";

test("Button Component Rendering", () => {
    const component = renderer.create(<Button>Default</Button>);
    const domTree = component.toJSON();
    expect(domTree).toMatchSnapshot();
});
