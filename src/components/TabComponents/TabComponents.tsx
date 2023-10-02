import React from "react";
import "./style.css";
import TabComponent from "../TabComponent/TabComponent";

export const TabComponents = (): JSX.Element => {
    return (
        <div>
                <div  style={{marginBottom: "20px"}}>
                    <p>type "pills"</p>
                    <TabComponent type="pills"/>
                </div>
                <div>
                    <p>type "underline"</p>
                    <TabComponent type="underline"/>
                </div>
        </div>
    );
};
