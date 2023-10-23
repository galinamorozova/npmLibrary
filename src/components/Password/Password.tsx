import React, {FC, useState} from 'react';
import styles from './Password.module.css';
import PropTypes from "prop-types";
import Form from 'react-bootstrap/Form';
import FormGroup from 'react-bootstrap/FormGroup';
import {FloatingLabel, InputGroup} from "react-bootstrap";
import closedEye from "./../../images/closedEye.svg";
import openedEye from "./../../images/openedEye.svg";

interface PasswordProps {
    label: string;
    validation?: "true" | "false" | "none";
    placeholder: true | false;
    placeholderText?: string;
    disabled?: true | false;
}

const Password = ({
                      label,
                      validation,
                      disabled,
                      placeholderText,
                      placeholder,
                      ...props
                  }: PasswordProps): JSX.Element => {
    const [shownPassword, setShownPassword] = useState(false)
    const scn = ("validation-" + validation + "-placeholder-" + placeholder);

    return (
        <>
            <FormGroup className={styles.password} data-testid="Password">

                <FloatingLabel controlId="input"
                               label={label}
                               className={styles.inputContainer}
                >
                    <Form.Control as="input"
                                  type={shownPassword ? "password" : ""}
                                  placeholder={placeholder && placeholderText ? placeholderText : ""}
                                  id={`${scn}`}
                                  disabled={disabled}
                    />
                    <span id="eyeIcon" onClick={() => setShownPassword(!shownPassword)}>
                <img src={shownPassword ? openedEye : closedEye}/> </span>
                    {validation === "true" && <p className={styles.validationText}>Успешно</p>}
                    {validation === "false" && <p className={styles.validationText}>Ошибка</p>}
                </FloatingLabel>
            </FormGroup>
        </>
    );
};

export default Password;

Password.defaultProps = {
    label: "Пароль",
    validation: "none",
    placeholder: false,
    disabled: false,
};

Password.propTypes = {
    label: PropTypes.string,
    validation: PropTypes.oneOf(["true", "false", "none"]),
    placeholder: PropTypes.oneOf([true, false]),
    placeholderText: PropTypes.string,
    disabled: PropTypes.oneOf([true, false]),
};
