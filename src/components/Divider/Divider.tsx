import React from 'react';
import PropTypes from "prop-types";

export interface DividerProps {
    margin: string,
    color: string,
    height: string,
    width: string,
}

export const Divider = ({
                            margin,
                            color,
                            height,
                            width,
                            ...props
                        }: DividerProps): JSX.Element => {

    return (

        <div
             style={{borderBottomStyle: "solid",
                 borderBottomWidth: height,
                 borderBottomColor: color,
                 width: width,
             margin: margin}}
             data-testid="Divider">
        </div>
    );
}

export default Divider;

Divider.defaultProps = {
    margin: "15px 0",
    color: "#C6C7D3",
    height: "1px",
    width: "100%"
};

Divider.propTypes = {
    margin: PropTypes.string,
    color: PropTypes.string,
    height: PropTypes.string,
    width: PropTypes.string,
};