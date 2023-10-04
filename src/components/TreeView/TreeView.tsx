import React from 'react';
import styles from './TreeView.module.css';
import PropTypes from "prop-types";
import {NodeRendererProps, Tree} from "react-arborist";
import docIcon from "../../images/docIcon.svg";
import imgIcon from "../../images/imgIcon.svg";
import folderIcon from "../../images/closedFolderIcon.svg";
import closeFolderIcon from "../../images/openedFolderIcon.svg";


export interface OptionType {
    id: string,
    name: string,
    children?: DataChildrenType[],
}
export interface DataChildrenType {
    id: string,
    name: string,
    type?: string,
    children?: DataChildrenType[],
    onClick: ()=> void
}

const dataOption: OptionType[] = [
    {
        id: "1",
        name: "Папка",
        children: [
            { id: "a1", name: "Документ", type: "doc", onClick: ()=>{} },
            { id: "a2", name: "Изображение", type: "img", onClick: ()=>{} },
            { id: "a3", name: "Изображение", type: "img", onClick: ()=>{} },
        ],
    },
    {
        id: "2",
        name: "Папка",
        children: [
            { id: "b1",
              name: "Подпапка",
                onClick: ()=>{},
            children: [
                { id: "b11", name: "Документ", type: "doc", onClick: ()=>{}}
            ]},
            { id: "b2", name: "Документ", type: "doc", onClick: ()=>{} },
            { id: "b3", name: "Документ", type: "doc", onClick: ()=>{} },
        ],
    },
];


export interface TreeViewProps {
    openByDefault: boolean,
    data: OptionType[]
}
function Node({ node, style, dragHandle }: NodeRendererProps<any>) {
    /* This node instance can do many things. See the API reference. */
    return (
        <div style={style} ref={dragHandle} onClick={() => node.toggle()}>
            <div style={{display: "flex", alignItems: "center"}}>
                {(node.isLeaf && node.data.type === "doc") && <img src={docIcon}/>}
                {(node.isLeaf && node.data.type === "img") && <img src={imgIcon}/>}
                {(!node.isLeaf && !node.isOpen) && <img src={folderIcon}/>}
                {(!node.isLeaf && node.isOpen) && <img src={closeFolderIcon}/>}
                <span style={{marginLeft: "8px", marginTop: "1px"}}>{node.data.name}</span>
            </div>
        </div>
    );
}
export const TreeView = ({
                            openByDefault,
                            data,
                            ...props
                        }: TreeViewProps): JSX.Element => {

    return (

    <div className={styles.TreeView} data-testid="TreeView">
        <Tree
            initialData={data}
            openByDefault={openByDefault}
            width={"100%"}
            indent={24}
            rowHeight={30}
            overscanCount={1}
        >
            {Node}
        </Tree>
    </div>
);
                        }

export default TreeView;

TreeView.defaultProps = {
    openByDefault: false,
    data: dataOption,
};

TreeView.propTypes = {
    openByDefault: PropTypes.oneOf([true, false]),
    data: PropTypes.array
};