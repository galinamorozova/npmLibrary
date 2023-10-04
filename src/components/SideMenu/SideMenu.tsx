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
import PropTypes from "prop-types";


export interface SideMenuOptionType {
    id: string,
    name: string,
    icon?: "folder" | "shield" | "tape" | "comment" | "schedule",
    number?: number,
    children?: SideMenuDataChildrenType[],
}

export interface SideMenuDataChildrenType {
    id: string,
    name: string,
    icon?: "folder" | "shield" | "tape" | "comment" | "schedule",
    number?: number,
    children?: SideMenuDataChildrenType[],
    onClick: ()=> void
}

const dataOption: SideMenuOptionType[] = [
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
    data: SideMenuOptionType[]
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
                        <div className={styles.menuItem} style={{backgroundColor: node.data.icon ? "#255486" : "",
                            margin: node.data.icon ? "0px 0" : ""}}
                             onClick={node.data.onClick}>
                            <div className={styles.iconContainer}>
                                {(node.data.icon && node.data.icon === "folder") && <img src={folder} alt=""/>}
                                {(node.data.icon && node.data.icon === "schedule") && <img src={schedule} alt=""/>}
                                {(node.data.icon && node.data.icon === "tape") && <img src={tape} alt=""/>}
                                {(node.data.icon && node.data.icon === "shield") && <img src={shield} alt=""/>}
                                {(node.data.icon && node.data.icon === "comment") && <img src={comment} alt=""/>}
                                <span style={{marginLeft: node.data.icon ? "8px" : "",
                                    marginTop: !node.data.icon ? "10px" : "0px",
                                    marginBottom: !node.data.icon ? "10px" : "0px",
                                    fontSize: node.data.icon ? "14px" : "12px"}}>
                                    {node.data.name}</span>
                            </div>
                            <div>
                                {
                                    node.data.number &&
                                    <span className={styles.message} style={{backgroundColor: node.data.icon ? "#1B3F7F" : "#163964"}}>
                                        {node.data.number}
                                    </span>
                                }
                                {(!node.isOpen) && <img src={down} alt=""/>}
                                {(node.isOpen) && <img src={top} alt=""/>}
                            </div>
                        </div>
                    }

                    {node.isLeaf &&
                        <div className={styles.menuItem} onClick={node.data.onClick}>
                            <span>&mdash; {node.data.name}</span>
                            <div className={styles.iconContainer}>
                                {node.data.number &&
                                    <span className={styles.message} style={{backgroundColor: node.data.icon ? "#1B3F7F" : "#163964"}}>
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