import React from "react";
import {create} from "react-test-renderer";
import ProfileStatus from "./ProfileStatus";

describe("ProfileStatusComponent", () =>{
    test("status from props should be in state", () => {
        const component = create(<ProfileStatus status="Privet huiluwam)))"/>);
        const instance = component.getInstance();
        expect(instance.state.status).toBe("Privet huiluwam)))");
    });

    test("after creation <span> should be displayed", () => {
        const component = create(<ProfileStatus status="Privet huiluwam)))"/>);

        const root = component.root;
        let span = root.findByType("span");
        expect(span).not.toBeNull();
    });

    test("after creation <unput> should be displayed", () => {
        const component = create(<ProfileStatus status="Privet huiluwam)))"/>);

        const root = component.root;

        expect(() => {
            let input = root.findByType("input")
        }).toThrow();
    });

    test("after creation <span> should be contains correct status", () => {
        const component = create(<ProfileStatus status="Privet huiluwam)))"/>);

        const root = component.root;
        let span = root.findByType("span");
        expect(span.children[0]).toBe("Privet huiluwam)))");
    });

    test("input should be displayed in edit mode instead span", () => {
        const component = create(<ProfileStatus status="Privet huiluwam)))"/>);

        const root = component.root;
        let span = root.findByType("span");
        span.props.onDoubleClick();
        let input = root.findByType("input");

        expect(input.props.value).toBe("Privet huiluwam)))");
    });

    test("callback should be called", () => {
        const mockCallback = jest.fn();
        const component = create(<ProfileStatus status="Privet huiluwam)))" status="Privet huiluwam)))" updateStatus={mockCallback}/>);

        const instance = component.getInstance();
        instance.deactivateEditMode();

        expect(mockCallback.mock.calls.length).toBe(1);
    });


});