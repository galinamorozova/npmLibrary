import React, { FC } from 'react';
import styles from './TabComponent.module.css';
import {Tab, Tabs} from "react-bootstrap";
import PropTypes, {string} from "prop-types";

export interface TabComponentProps {
    type: "pills" | "underline";
    options: TabOptionType[];

}

export type TabOptionType = {
    key: string;
    title: string;
    content: string
};
const StateOption: TabOptionType[] = [
    {key: 'Option1', title: 'Option1', content: "Content1"},
    {key: 'Option2', title: 'Option2', content: "Content2"},
    {key: 'Option3', title: 'Option3', content: "Content3"},
];

export const TabComponent = ({
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
                    backgroundColor:"white"}}
            >
                {options.map(o => {
                    return(
                        <Tab eventKey={o.key} title={o.title} style={{backgroundColor: "white"}} className={styles.tab}>
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