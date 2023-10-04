import PropTypes from "prop-types";
import React from "react";
import Form from 'react-bootstrap/Form';
import FormGroup from 'react-bootstrap/FormGroup';
import styles from './Counter.module.css';

export interface CounterProps {
  label: string;
}

export const Counter = ({ label, ...props }: CounterProps): JSX.Element => {

  return (
    <Form>
      <Form.Label className={`${styles.label} `} > {label} </Form.Label >
      <FormGroup className={`${styles['inputs-atom']} `} data-testid="Counter" >
        <img  className={`${styles['icon-black']} `} src={"/src/images/icon/black/icon-black-minus.svg"} alt=""  ></img>
        <Form.Label className={`${styles.label_8} `} > 8 </Form.Label >
        <img  className={`${styles['icon-black2']} `} src={"/src/images/icon/black/icon-black-plus.svg"} alt=""  ></img>
      </FormGroup>
    </Form>
  );
};

export default Counter;

Counter.defaultProps = {
  label: "Заголовок",
};

Counter.propTypes = {
  label: PropTypes.string,
};