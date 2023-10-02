import React from "react";
import "./style.css";
import Input from "../Input/Input";

export const Inputs = (): JSX.Element => {
    return (
        <div className="container">
            <div className="container" style={{alignItems: "flex-start"}}>
                <Input type={"primary"} validation={"none"} label="Primary"/>
                <Input type={"primary"} validation={"true"} label="Primary"/>
                <Input type={"primary"} validation={"false"} label="Primary"/>
                <Input type={"primary"} validation={"none"} label="Primary" disabled={true}/>
            </div>
            <div className="container" style={{alignItems: "flex-start"}}>
                <Input type={"primary"} validation={"none"} label="Primary" placeholder={true} placeholderText="__.__.____"/>
                <Input type={"primary"} validation={"true"} label="Primary" placeholder={true} placeholderText="__.__.____"/>
                <Input type={"primary"} validation={"false"} label="Primary" placeholder={true} placeholderText="__.__.____"/>
                <Input type={"primary"} validation={"none"} label="Primary" placeholder={true} placeholderText="__.__.____" disabled={true}/>
            </div>
            <div className="container" style={{alignItems: "flex-start"}}>
                <Input type={"money"} validation={"none"} label="Money" currency="$"/>
                <Input type={"money"} validation={"true"} label="Money" currency="$"/>
                <Input type={"money"} validation={"false"} label="Money" currency="$"/>
                <Input type={"money"} validation={"none"} label="Money" currency="$" disabled={true}/>
            </div>
            <div className="container" style={{alignItems: "flex-start"}}>
                <Input type={"money"} validation={"none"} label="Money" currency="$" placeholder={true} placeholderText="__.__.____"/>
                <Input type={"money"} validation={"true"} label="Money" currency="$" placeholder={true} placeholderText="__.__.____"/>
                <Input type={"money"} validation={"false"} label="Money" currency="$" placeholder={true} placeholderText="__.__.____"/>
                <Input type={"money"} validation={"none"} label="Money" currency="$" placeholder={true} placeholderText="__.__.____" disabled={true}/>
            </div>
        </div>
    );
};
