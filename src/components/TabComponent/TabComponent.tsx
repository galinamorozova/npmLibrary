import React, { FC } from 'react';
import styles from './TabComponent.module.css';
import {Nav, Tab, Tabs} from "react-bootstrap";
import PropTypes, {string} from "prop-types";

export interface TabComponentProps {
    type: "pills" | "underline";
    options: OptionType[];

}

type OptionType = {
    key: string;
    title: string;
    content: string;
    onClick?: ()=>{}
};
const StateOption: OptionType[] = [
    {key: 'Option1', title: 'Option1', content: "Content1"},
    {key: 'Option2', title: 'Option2', content: "Content2"},
    {key: 'Option3', title: 'Option3', content: "Content3"},
];

const TabComponent = ({
                          type,
                          options,
                          ...props
                      }: TabComponentProps): JSX.Element => {
    const scn = ("type-" + type);
    return (
        <div className={`${styles[scn]}`} data-testid="TabComponent">
            <Tabs
                defaultActiveKey="profile"
                id="uncontrolled-tab-example"
                style={{borderRadius: "4px", padding: "2px 2px 3px 2px", border: "none",
                    backgroundColor: type === "pills" ? "#F3F6F9" : ""}}
            >
                {options.map(o => {
                    return(
                        <Tab eventKey={o.key} title={o.title}
                             style={{backgroundColor: "white"}}
                             className={styles.tab}
                             onClick={o.onClick? o.onClick : ()=>{}}>
                            {o.content}
                        </Tab>
                    )
                })}
            </Tabs>

        </div>
    );
}

export default TabComponent;

TabComponent.defaultProps = {
    type: "pills",
    options: StateOption
};

TabComponent.propTypes = {
    type: PropTypes.oneOf(["pills", "underline"])
};