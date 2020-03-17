import React from "react";
import Button from "../Button";
import renderer from "react-test-renderer";
import { shallow, mount } from "enzyme";

describe("[Button] Component Rendering", () => {
    it("should render without crashing", () => {
        const snapshot = renderer.create(<Button>Default</Button>).toJSON();
        expect(snapshot).toMatchSnapshot();
    });

    it("should render disabled without crashing", () => {
        const snapshot = renderer.create(<Button disabled={true}>Button</Button>).toJSON();
        expect(snapshot).toMatchSnapshot();
    });

    it('defualt value is "DEFAULT"', () => {
        const wrapper = shallow(<Button />);
        expect(wrapper.text()).toEqual("DEFAULT");
    });

    it('rendering Text well with "로그인 버튼"', () => {
        const wrapper = shallow(<Button>로그인 버튼</Button>);
        expect(wrapper.text()).toEqual("로그인 버튼");
    });

    it('rendering Text well with "로그인 버튼"', () => {
        let isClicked = false;

        const onClick = event => {
            isClicked = true;
        };

        const wrapper = mount(<Button onClick={onClick}>로그인 버튼</Button>);
        wrapper.simulate("click");

        expect(isClicked).toBe(true);
    });
});
