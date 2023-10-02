import React from 'react';

import Icon from '../Icon/Icon';
import PropTypes from "prop-types";
import Button from "react-bootstrap/Button";

import styles from './ButtonM.module.css';

export interface ButtonMProps {
  type: "primary" | "outline" | "disabled" | "secondary";
  hover: "on" | "off";
  iconType: "r" | "none" | "l";
  iconName?: "plus" | "right" | "left"| "check"| "search"| "x";
  label: string;
}

export const ButtonM = ({
  type,
  hover,
  iconType,
  iconName,
  label,
  ...props
}: ButtonMProps): JSX.Element => {
  const scn = ("type-" + type + "-hover-" + hover + "-icon-" + iconType);
  return (
    <div className={styles['button-atom-l']}>
      <Button
        className={`${styles[scn]}`}
        data-testid='ButtonM'
        {...props}>
        {["l"].includes(iconType) ? <Icon icon={iconName ? iconName : "plus"} theme={(type === "primary" || type === "secondary" )? "white" : "black"} type={type} /> : ""}
        <span className={styles["include-text-" + type]}> {label}  </span>
        {["r"].includes(iconType) ? <Icon icon={iconName ? iconName : "plus"} theme={(type === "primary" || type === "secondary") ? "white" : "black"} type={type} /> : ""}
      </Button>
    </div>
  );
};

export default ButtonM;

ButtonM.defaultProps = {
  type: "primary",
  hover: "on",
  iconType: "none",
  label: "Button text",
};

ButtonM.propTypes = {
  type: PropTypes.oneOf(["primary", "outline", "disabled"]),
  hover: PropTypes.oneOf(["on", "off"]),
  iconType: PropTypes.oneOf(["r", "none", "l"]),
  iconName: PropTypes.oneOf(["plus", "right", "left", "check", "search", "x"]),
  label: PropTypes.string,
};
