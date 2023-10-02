import React from "react";
import "./style.css";
import Select2 from "../Select2/Select2";
const StateOption  = [
    {value: 'Option1', label: 'Option1'},
    {value: 'Option2', label: 'Option2'},
    {value: 'Option3', label: 'Option3'},
];
export const Selects = (): JSX.Element => {
    return (
        <div className="container">
            <Select2 title="Select" multiType={true} options={StateOption}/>
            <Select2 title="Select" multiType={false} options={StateOption}/>
        </div>
    );
};
