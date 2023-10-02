import React from 'react';
import styles from './Input.module.css';
import PropTypes from "prop-types";
import Form from 'react-bootstrap/Form';
import {FloatingLabel, InputGroup} from "react-bootstrap";

export interface InputProps {
  type: "primary" | "money",
  currency?: string;
  label: string;
  placeholder: true | false;
  placeholderText?: string;
  validation: "true" | "false" | "none";
  disabled: true | false;
}

export const Input = ({
                        type,
                        label,
                        currency,
                        placeholder,
                        placeholderText,
                        validation,
                        disabled,
                        ...props
                      }: InputProps): JSX.Element => {
  const scn = ("type-" + type + "-validation-" + validation + "-placeholder-" + placeholder);
  return (
      <div className={styles.input} data-testid="Input">
          {type === "primary" &&
              <FloatingLabel controlId="input"
                          label={label}
                          className={styles.inputContainer}
          >
              <Form.Control as="input"
                            placeholder={placeholderText ? placeholderText : ""}
                            id={`${scn}`}
                            style={{maxHeight: "40px"}}
              disabled={disabled}/>

              {validation === "true" && <p className={styles.validationText}>Успешно</p>}
              {validation === "false" && <p className={styles.validationText}>Ошибка</p>}
          </FloatingLabel>}
          {type === "money" &&
              <>

              <InputGroup id={`${scn}`}>
                  <FloatingLabel controlId="input"
                                 label={label}
                                 className={styles.inputContainer}
                  >
                  <Form.Control as="input"
                                placeholder={placeholder && placeholderText ? placeholderText : ""}
                                id={`${scn}`}
                                disabled={disabled}/>
                  <InputGroup.Text id="currency"> {currency}</InputGroup.Text>
                  </FloatingLabel>
              </InputGroup>

          {validation === "true" && <p className={styles.validationText}>Успешно</p>}
          {validation === "false" && <p className={styles.validationText}>Ошибка</p>}
              </>
          }

      </div>
  )
}

export default Input;

Input.defaultProps = {
  label: "Текст",
  type: "primary",
  validation: "none",
  placeholder: false,
  disabled: false,
};

Input.propTypes = {
  label: PropTypes.string,
  type: PropTypes.oneOf(["primary", "money"]),
  currency: PropTypes.string,
  placeholder: PropTypes.oneOf([true, false]),
  placeholderText: PropTypes.string,
  validation: PropTypes.oneOf(["true", "false", "none"]),
  disabled: PropTypes.oneOf([true, false]),
};