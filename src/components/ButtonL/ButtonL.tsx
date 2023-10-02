import React from 'react';

import Icon from '../Icon/Icon';
import PropTypes from "prop-types";
import Button from "react-bootstrap/Button";

import styles from './ButtonL.module.css';

export interface ButtonLProps {
  type: "primary" | "outline" | "disabled" | "secondary";
  hover: "on" | "off";
  iconType: "r" | "none" | "l";
  iconName?: "plus" | "right" | "left"| "check"| "search"| "x";
  label: string;
}

export const ButtonL = ({
  type,
  hover,
  iconType,
  iconName,
  label,
  ...props
}: ButtonLProps): JSX.Element => {
  const scn = ("type-" + type + "-hover-" + hover + "-icon-" + iconType);
  return (
    <div className={styles['button-atom-l']}>
      <Button
        className={`${styles[scn]}`}
        data-testid='ButtonL'
        {...props}>
        {["l"].includes(iconType) ? <Icon icon={iconName ? iconName : "plus"} theme={(type === "primary" || type === "secondary" )? "white" : "black"} type={type} /> : ""}
        <span className={styles["include-text-" + type]}> {label}  </span>
        {["r"].includes(iconType) ? <Icon icon={iconName ? iconName : "plus"} theme={(type === "primary" || type === "secondary") ? "white" : "black"} type={type} /> : ""}
      </Button>
    </div>
  );
};

export default ButtonL;

ButtonL.defaultProps = {
  type: "primary",
  hover: "on",
  iconType: "none",
  label: "Button text"
};

ButtonL.propTypes = {
  type: PropTypes.oneOf(["primary", "outline", "disabled"]),
  hover: PropTypes.oneOf(["on", "off"]),
  iconType: PropTypes.oneOf(["r", "none", "l"]),
  iconName: PropTypes.oneOf(["plus", "right", "left", "check", "search", "x"]),
  label: PropTypes.string
};
