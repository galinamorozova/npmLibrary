import React from "react";
import "./style.css";
import Divider from "../Divider/Divider";

export const Dividers = (): JSX.Element => {
    return (
        <div>
            <p>default</p>
            <Divider/>
            <p>width</p>
            <Divider width="150px"/>
            <p>color</p>
            <Divider color="red"/>
            <p>margin</p>
            <Divider margin="40px 0"/>
            <p>height</p>
            <Divider height="3px"/>
        </div>
    );
};
