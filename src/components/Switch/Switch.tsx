import React from 'react';
import {Form} from 'react-bootstrap';
import styles from './Switch.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import PropTypes from "prop-types";

export interface SwitchProps {
    type: "checkbox" | "radio" | "switch"
    checked: true | false;
    label: string;
    disabled: true | false;
}

export const Switch = ({
                           type,
                           checked,
                           label,
                           disabled,
                           ...props
                       }: SwitchProps): JSX.Element => {
    const scn = ("type-" + type + "-checked-" + checked + "-disabled-" + disabled);
    return (
        <div className="mb-3" data-testid="Switch">
            <Form.Check
                type={type}
                id={`check-api-${type}`}
                bsPrefix={styles.switchContainer}
            >
                <Form.Check.Input
                    type={type === "checkbox" || type === "switch" ? "checkbox" : "radio"}
                    id={`${scn}`}
                    disabled={disabled}
                    checked={checked}
                />
                <Form.Check.Label className={styles.switchLabel}>{label}</Form.Check.Label>
            </Form.Check>
        </div>
    )
}

export default Switch;

Switch.defaultProps = {
    type: "checkbox",
    checked: false,
    label: "Switch text",
    disabled: false
};

Switch.propTypes = {
    type: PropTypes.oneOf(["checkbox", "radio", "switch"]),
    checked: PropTypes.oneOf([true, false]),
    label: PropTypes.string,
    disabled: PropTypes.oneOf([true, false]),
};