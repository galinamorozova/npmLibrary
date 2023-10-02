import React from "react";
import "./style.css";
import ProgressBarComponent from "../ProgressBar/ProgressBarComponent";

export const ProgressBars = (): JSX.Element => {
    return (
        <div className="container">
            <ProgressBarComponent width="200px" now={0}/>
            <ProgressBarComponent width="200px" now={10}/>
            <ProgressBarComponent width="200px" height="10px" now={40} visuallyHidden={false}/>
        </div>
    );
};
