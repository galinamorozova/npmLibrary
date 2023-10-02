import React from "react";
import "./style.css";
import SideMenu from "../SideMenu/SideMenu";

export const SideMenuComponents = (): JSX.Element => {
    return (
        <div style={{display: "flex", gap: "50px"}}>
            <div style={{width: 300}}>
                <p>openByDefault</p>
                <SideMenu openByDefault={true}/>
            </div>
            <div style={{width: 300}}>
                <p>closeByDefault</p>
                <SideMenu openByDefault={false}/>
            </div>
        </div>
    );
};
