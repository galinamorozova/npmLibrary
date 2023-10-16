import React from 'react';

import Icon from '../Icon/Icon';
import PropTypes from "prop-types";
import Button from "react-bootstrap/Button";

import styles from './ButtonM.module.css';

export interface ButtonMProps {
  type: "primary" | "outline" | "disabled" | "secondary";
  hover: "on" | "off";
  iconType: "r" | "none" | "l" | "rl";
  iconName?: "plus" | "right" | "left"| "check"| "search"| "x" | "sliders";
  label: string;
  width?: string;
  onClick?: ()=> void;
}

export const ButtonM = ({
                          type,
                          hover,
                          iconType,
                          iconName,
                          label,
                          onClick,
                          width,
                          ...props
                        }: ButtonMProps): JSX.Element => {
  const scn = ("type-" + type + "-hover-" + hover + "-icon-" + iconType);
  return (
      <div className={styles['button-atom-l']} style={{width: width}}>
        <Button
            onClick={onClick}
            type="submit"
            className={`${styles[scn]}`}
            data-testid='ButtonM'
            {...props}>
          {["rl"].includes(iconType) || ["l"].includes(iconType) ? <Icon icon={iconName ? iconName : "plus"} theme={(type === "primary" || type === "secondary" )? "white" : "black"} type={type} /> : ""}
          <span className={styles["include-text-" + type]}> {label}  </span>
          {["rl"].includes(iconType) || ["r"].includes(iconType) ? <Icon icon={iconName ? iconName : "plus"} theme={(type === "primary" || type === "secondary") ? "white" : "black"} type={type} /> : ""}
        </Button>
      </div>
  );
};

export default ButtonM;

ButtonM.defaultProps = {
  type: "primary",
  hover: "off",
  iconType: "none",
  label: "Button text",
  width: "fit-content"
};

ButtonM.propTypes = {
  type: PropTypes.oneOf(["primary", "outline", "disabled"]),
  hover: PropTypes.oneOf(["on", "off"]),
  iconType: PropTypes.oneOf(["r", "none", "l", "rl"]),
  iconName: PropTypes.oneOf(["plus", "right", "left", "check", "search", "x", "sliders"]),
  label: PropTypes.string,
  width: PropTypes.string
};
