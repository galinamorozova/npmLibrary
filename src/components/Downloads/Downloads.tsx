import React from "react";
import "./style.css";
import Download from "../Download/Download";

export const Downloads = (): JSX.Element => {
    return (
        <div className="container">
            <Download label= "Загрузить" validation="none" placeholder="Документ" disabled={false}/>
            <Download label= "Validation" validation="false" placeholder="Документ" disabled={false}/>
            <Download label= "Disabled" validation="none" placeholder="Документ" disabled={true}/>
        </div>
    );
};
