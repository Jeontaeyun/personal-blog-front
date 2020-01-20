import React from "react";
import Button from "./index";
import renderer from "react-test-renderer";
import { shallow } from "enzyme";

describe("[Button] Component Rendering", () => {
    it("should render without crashing", () => {
        const component = renderer.create(<Button>Default</Button>);
        const domTree = component.toJSON();
        expect(domTree).toMatchSnapshot();
    });
    it('defualt value is "DEFAULT"', () => {
        const component = shallow(<Button />);
        expect(component.text()).toEqual("DEFAULT");
    });
});
