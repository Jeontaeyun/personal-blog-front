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
    
    it("should render disabled without crashing", () => {
        const component = renderer.create(<Button disabled={true}>Default</Button>);
        const domTree = component.toJSON();
        expect(domTree).toMatchSnapshot();
    });

    it('defualt value is "DEFAULT"', () => {
        const component = shallow(<Button />);
        expect(component.text()).toEqual("DEFAULT");
    });

    it('rendering Text well with "로그인 버튼"', () => {
        const component = shallow(<Button>로그인 버튼</Button>);
        expect(component.text()).toEqual("로그인 버튼");
    });
});
