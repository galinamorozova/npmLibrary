import PropTypes from "prop-types";
import React from "react";
import Form from 'react-bootstrap/Form';
import FormGroup from 'react-bootstrap/FormGroup';
import styles from './Multipledatepicker.module.css';

export interface MultipledatepickerProps {
  label: string;
  datatype: "datetime" | "datetime-local" | "date" | "month" | "time" | "week" | "daterp";
  minvalue: string;
  maxvalue: string;
}

export const Multipledatepicker = ({ label,datatype,minvalue,maxvalue, ...props }: MultipledatepickerProps): JSX.Element => {

  // $('.date').datepicker({
  //   multidate: true,
  //   format: 'dd-mm-yyyy'
  // });
  return (
  <FormGroup className={`${styles['inputs-atom']} input-daterange input-group`} data-testid="Multipledatepicker" >
    <Form.Label className={`${styles.label} `} > {label} </Form.Label >
    <Form.Control className={`${styles.frame} `} type="date" min={minvalue} max={maxvalue}   >
    </Form.Control>
    <span className="input-group-addon">to</span>
    <Form.Control className={`${styles.frame} `} type="date" min={minvalue} max={maxvalue}   >
    </Form.Control>
  </FormGroup>
  );
};

export default Multipledatepicker;

Multipledatepicker.defaultProps = {
  label: "Заголовок",
  datatype: "date",
  minvalue: "01-01-1997",
  maxvalue: "31-12-2030",
};

Multipledatepicker.propTypes = {
  label: PropTypes.string,
  datatype: PropTypes.oneOf(["datetime", "datetime-local", "date", "month", "time", "week"]),
  minvalue: PropTypes.string,
  maxvalue: PropTypes.string,
};