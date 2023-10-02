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
                label={`${now}%`}
                visuallyHidden={visuallyHidden}
                style={{height: height, width: width}}
                variant="custom"
                className={styles.custom}
            />
        </div>
    );
}

export default ProgressBarComponent;


ProgressBarComponent.defaultProps = {
    height: "3px",
    width: "100%",
    now: 0,
    visuallyHidden: true,
};
ProgressBarComponent.propTypes = {
    height: PropTypes.string,
    width: PropTypes.string,
    now: PropTypes.number,
    visuallyHidden: PropTypes.oneOf([true, false])
};