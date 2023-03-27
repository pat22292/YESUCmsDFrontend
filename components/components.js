import React from "react";
import Foo from "../components/testComponents/Foo";
import Bar from "../components/testComponents/Bar";
import Slider from "../components/slider/swiper-slide"
import CenteredLogoNavBar from '../components/navigation/CenteredLogoNavBar';
import DefaultLogoNavBar from '../components/navigation/DefaultNavBar';
import TwoColumn from "./column/twoColumn";


const Components = {
    foo: Foo,
    bar: Bar,
    slider: Slider,
    CenteredLogoNavBar: CenteredLogoNavBar,
    twoColumn: TwoColumn

};

export default block => {
    if (typeof Components[block.component_name] !== "undefined") {
        return React.createElement(Components[block.component_name], {
            key: block.id,
            block: block
        });
    }
    return React.createElement(
        () => <div>The component {block.component_name} has not been created yet.</div>,
        { key: block.id }
    );
};
