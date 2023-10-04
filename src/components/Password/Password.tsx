import React, { FC } from 'react';
import styles from './Password.module.css';
import PropTypes from "prop-types";
import Form from 'react-bootstrap/Form';
import FormGroup from 'react-bootstrap/FormGroup';

export interface PasswordProps {
  label: string;
}

export const Password = ({ label, ...props }: PasswordProps): JSX.Element => {

  return (
    <FormGroup className={`${styles['inputs-atom']} `} data-testid="Password" >
      <Form.Label className={`${styles.label} `} > {label} </Form.Label >
      <Form.Control className={`${styles.frame} `} type="password" >
      </Form.Control>
      
    </FormGroup>
  );
};

export default Password;

Password.defaultProps = {
  label: "Пароль",
};

Password.propTypes = {
  label: PropTypes.string,
};
