import React, {useState, useCallback} from "react";
import TYTextInput from "../TYTextInput";
import renderer from "react-test-renderer";
import { mount } from "enzyme";

describe("[TYTextInput] Component Rendering", () => {
    it("should render without crashing", () => {
        const value = "";
        const snapshot = renderer.create(<TYTextInput value={value} onChange={()=>{}} placeholder={"placeholder"} />).toJSON();
        expect(snapshot).toMatchSnapshot();
    });

    it("render placholder without crashing", () => {
        const value = "";
        const wrapper = mount(<TYTextInput value={value} onChange={()=>{}} placeholder={"test-placeholder"} />);
        const input = wrapper.find("input");
        expect(wrapper.props().placeholder).toBe("test-placeholder");
    });

    it("has an input element", () => {
        const value = ""
        const wrapper = mount(<TYTextInput value={value} onChange={()=>{}} />);
        const inputElement = wrapper.find("input[type='text']");
        expect(inputElement.exists()).toBe(true);
    });

    it("simulate input change", () => {
        let value = ""
        const mockedEvent = {
            target : {
                value: "It is test data"
            }
        }
        const wrapper = mount(<TYTextInput value={value} onChange={(event) => {
            value = event.target.value;
        }} />);
        let inputElement = wrapper.find("input[type='text']");
        inputElement.simulate('change', mockedEvent);

        /**
        * Document for me
        * Like const [value, setValue] = useState("");
        * After changing state from here, set value prop again 
        * and check input element's value from here
        */
        wrapper.setProps({ value: value });
        inputElement = wrapper.find("input[type='text']");

        expect(inputElement.props().value).toBe("It is test data");
    });
});
