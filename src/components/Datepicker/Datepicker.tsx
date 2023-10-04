import PropTypes from "prop-types";
import React from "react";
import Form from 'react-bootstrap/Form';
import FormGroup from 'react-bootstrap/FormGroup';
import { JSX } from 'react/jsx-runtime';
import styles from './Datepicker.module.css';

export interface DatepickerProps {
  label: string;
  datatype: "datetime" | "datetime-local" | "date" | "month" | "time" | "week" ;
  minvalue: string;
  maxvalue: string;
}

export const Datepicker = ({ label,datatype,minvalue,maxvalue, ...props }: DatepickerProps): JSX.Element => {

  return (
    <FormGroup className={`${styles['inputs-atom']} `} data-testid="Datepicker" >
      <Form.Label className={`${styles.label} `} > {label} </Form.Label >
      <Form.Control className={`${styles.frame} `} type={datatype}  min={minvalue} max={maxvalue} >
      </Form.Control>
    </FormGroup>
  );
};

export default Datepicker;

Datepicker.defaultProps = {
  label: "Заголовок",
  datatype: "date",
  minvalue: "01-01-1997",
  maxvalue: "31-12-2030",
};

Datepicker.propTypes = {
  label: PropTypes.string,
  datatype: PropTypes.oneOf(["datetime", "datetime-local", "date", "month", "time", "week"]),
  minvalue: PropTypes.string,
  maxvalue: PropTypes.string,
};