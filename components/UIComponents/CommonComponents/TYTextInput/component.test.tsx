import React from "react";
import Component from "./index";
import renderer from "react-test-renderer";
import { shallow } from "enzyme";

// describe("[Button] Component Rendering", () => {
//     it("should render without crashing", () => {
//         const component = renderer.create(<Component value={} />);
//         const domTree = component.toJSON();
//         expect(domTree).toMatchSnapshot();
//     });

//     it('defualt value is "DEFAULT"', () => {
//         const component = shallow(<Component />);
//         expect(component.text()).toEqual("DEFAULT");
//     });

//     it('rendering Text well with "로그인 버튼"', () => {
//         const component = shallow(<Component/>);
//         expect(component.text()).toEqual("로그인 버튼");
//     });
// });
