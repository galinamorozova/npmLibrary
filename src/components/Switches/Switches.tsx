import React from "react";
import {Switch} from "../Switch/Switch";
import "./style.css";

export const Switches = (): JSX.Element => {
    return (
        <div className="container">
            <div className="container">
                <div>
                    <p>switch not checked</p>
                    <Switch type="switch" disabled={false}/>
                </div>
                <div>
                    <p>switch checked</p>
                    <Switch type="switch" checked/>
                </div>
            </div>
            <div className="container">
                <div>
                    <p>radio not checked</p>
                    <Switch type="radio"/>
                </div>
                <div>
                    <p>radio checked</p>
                    <Switch type="radio" checked/>
                </div>
            </div>

            <div className="container">
                <div>
                    <p>checkbox not checked</p>
                    <Switch type="checkbox"/>
                </div>
                <div>
                    <p>checkbox checked</p>
                    <Switch type="checkbox" checked/>
                </div>
            </div>
        </div>
    );
};
