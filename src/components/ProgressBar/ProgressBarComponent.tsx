import React from 'react';
import styles from './ProgressBarComponent.module.css';
import PropTypes from "prop-types";
import {ProgressBar} from "react-bootstrap";

export interface ProgressBarProps {
    height: string;
    width: string;
    now: number;
    visuallyHidden: boolean
}

export const ProgressBarComponent = ({
                            height,
                            width,
                            now,
                            visuallyHidden,
                         ...props
                         }: ProgressBarProps): JSX.Element => {
    return (
        <div className={styles.ProgressBarComponent} data-testid="ProgressBarComponent">
            <ProgressBar
                now={now}
                className={styles.custom}
                label={`${now}%`}
                visuallyHidden={visuallyHidden ? visuallyHidden : true}
                style={{height: height ? height : "3px", width: width ? width : "100%"}}
                variant="custom"
            />
        </div>
    );
}

export default ProgressBarComponent;


ProgressBarComponent.defaultProps = {
    height: "3px",
    width: "100%",
    now: 10,
    visuallyHidden: true,
};
ProgressBarComponent.propTypes = {
    height: PropTypes.string,
    width: PropTypes.string,
    now: PropTypes.number,
    visuallyHidden: PropTypes.oneOf([true, false])
};