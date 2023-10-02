import React from 'react';
import styles from './Textaria.module.css';
import PropTypes from "prop-types";
import {FloatingLabel, Form} from "react-bootstrap";

export interface TextariaProps {
    blockHeight?: string;
    blockWidth?: string;
    label: string;
}

export const Textaria = ({
                             blockHeight,
                             blockWidth,
                             label,
                             ...props
                         }: TextariaProps): JSX.Element => {
    const scn = ("height-" + blockHeight + "-width-" + blockWidth);
    return (
        <div className={styles.Textaria} data-testid="Textaria" style={{width: blockWidth, height: blockHeight}}>
            <p className={styles.title}>{label}</p>
            <FloatingLabel controlId="floatingTextarea2" label="" className={styles.label}>
                <Form.Control
                    as="textarea"
                    placeholder="Leave a comment here"
                    className={styles.textBlock}
                    style={{height: blockHeight}}
                />
            </FloatingLabel>
        </div>
    )
}

export default Textaria;

Textaria.defaultProps = {
    blockWidth: "100%",
    blockHeight: "100%",
    label: "Textaria text"
};

Textaria.propTypes = {
    blockWidth: PropTypes.string,
    blockHeight: PropTypes.string,
    label: PropTypes.string
};