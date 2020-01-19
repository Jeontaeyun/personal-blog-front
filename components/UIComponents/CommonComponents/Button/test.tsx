import Button from "./index";
import renderer from "react-test-renderer";

test("Button Component Rendering", () => {
    const component = renderer.create(<Button>Button</Button>);
    const domTree = component.toJSON();
    expect(domTree).toMatchSnapshot();
});
