import React from "react";
import "./style.css";
import TreeView from "../TreeView/TreeView";

export const TreeViews = (): JSX.Element => {
    return (
        <div style={{display: "flex", gap: "50px"}}>
            <div style={{width: 300}}>
                <p>openByDefault</p>
                <TreeView openByDefault={true}/>
            </div>
            <div style={{width: 300}}>
                <p>closeByDefault</p>
                <TreeView openByDefault={false}/>
            </div>
        </div>
    );
};
