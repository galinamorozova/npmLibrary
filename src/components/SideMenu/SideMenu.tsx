import React from 'react';
import styles from './SideMenu.module.css';
import {NodeRendererProps, Tree} from "react-arborist";
import folder from "../../images/folder.svg";
import schedule from "../../images/calendar.svg";
import tape from "../../images/tape.svg";
import shield from "../../images/shield.svg";
import comment from "../../images/commentIcon.svg";
import top from "../../images/top.svg";
import down from "../../images/down.svg";
import topLight from "../../images/topLight.svg";
import downLight from "../../images/downLight.svg";
import PropTypes from "prop-types";


interface OptionType {
    id: string,
    name: string,
    icon?: "folder" | "shield" | "tape" | "comment" | "schedule",
    number?: number,
    children?: DataChildrenType[],
}

interface DataChildrenType {
    id: string,
    name: string,
    icon?: "folder" | "shield" | "tape" | "comment" | "schedule",
    number?: number,
    children?: DataChildrenType[],
    onClick: ()=> void
}

const dataOption: OptionType[] = [
    {
        id: "1",
        name: "График судов",
        icon: "schedule",
        number: 1,
        children: [
            {
                id: "a1", name: "Назначенные мне", number: 2, onClick: ()=>{},
                children: [
                    {id: "aa1", name: "Плановые", number: 1, onClick: ()=>{}},
                    {id: "aa2", name: "Просроченные", onClick: ()=>{}},
                ]
            },
            {
                id: "a2", name: "Назначенные мной", onClick: ()=>{},
                children: [
                    {id: "aaa1", name: "Требуют назначения", onClick: ()=>{}},
                    {id: "aaa2", name: "Завершенные", onClick: ()=>{}},
                ],
            },
        ]
    },
    {
        id: "2",
        name: "Переговорные",
        icon: "folder",
        children: [
            {id: "b1", name: "Требуют назначения", onClick: ()=>{}},
            {id: "b2", name: "Завершенные", onClick: ()=>{}},
        ]
    },
];

export interface SideMenuProps {
    openByDefault: boolean,
    data: OptionType[]
}

export const SideMenu = ({
                      openByDefault,
                      data,
                      ...props
                  }: SideMenuProps): JSX.Element => {

    function Node({node, style, dragHandle}: NodeRendererProps<any>) {
        /* This node instance can do many things. See the API reference. */
        return (
            <div style={style} ref={dragHandle} onClick={() => node.toggle()}>
                <div>
                    {!node.isLeaf &&
                        <div className={styles.menuItem} style={{backgroundColor: node.data.icon ? "#F8F8F8" : "",
                        margin: node.data.icon ? "0px 0" : ""}}
                        onClick={node.data.onClick}>
                            <div className={styles.iconContainer}>
                                {(node.data.icon && node.data.icon === "folder") && <img src={folder} alt=""/>}
                                {(node.data.icon && node.data.icon === "schedule") && <img src={schedule} alt=""/>}
                                {(node.data.icon && node.data.icon === "tape") && <img src={tape} alt=""/>}
                                {(node.data.icon && node.data.icon === "shield") && <img src={shield} alt=""/>}
                                {(node.data.icon && node.data.icon === "comment") && <img src={comment} alt=""/>}
                                <span style={{marginLeft: node.data.icon ? "8px" : "",
                                    fontSize: node.data.icon ? "14px" : "12px", color: node.data.icon ? "#4E4E5B" : "#808089"}}>
                                    {node.data.name}</span>
                            </div>
                            <div>
                                {
                                    node.data.number &&
                                    <span className={styles.message} style={{backgroundColor: node.data.icon ? "white" : "#F8F8F8"}}>
                                        {node.data.number}
                                    </span>
                                }
                                {(!node.isOpen && node.data.icon) && <img src={down} alt=""/>}
                                {(node.isOpen && node.data.icon) && <img src={top} alt=""/>}
                                {(!node.isOpen && !node.data.icon) && <img src={downLight} alt=""/>}
                                {(node.isOpen && !node.data.icon) && <img src={topLight} alt=""/>}
                            </div>
                        </div>
                    }

                    {node.isLeaf &&
                        <div className={styles.menuItem} onClick={node.data.onClick}>
                            <span>&mdash; {node.data.name}</span>
                            <div className={styles.iconContainer}>
                                {node.data.number &&
                                    <span className={styles.message} style={{backgroundColor: node.data.icon ? "white" : "#F8F8F8"}}>
                                        {node.data.number}</span>
                                }
                                <div className={styles.emptyDecoration}></div>
                            </div>
                        </div>
                    }
                </div>
            </div>
        );
    }

    return (

        <div className={styles.SideMenu} data-testid="SideMenu">
            <Tree
                initialData={data}
                openByDefault={openByDefault}
                width={"100%"}
                indent={0}
                rowHeight={30}
                overscanCount={1}
            >
                {Node}
            </Tree>
        </div>
    );
}

export default SideMenu;

SideMenu.defaultProps = {
    openByDefault: false,
    data: dataOption,
};

SideMenu.propTypes = {
    openByDefault: PropTypes.oneOf([true, false]),
    data: PropTypes.array
};