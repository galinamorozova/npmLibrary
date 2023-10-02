
import PropTypes from "prop-types";
import React from 'react';
import styles from  './Icon.module.css';

type typeIcon = "outline" | "primary" | "disabled" | "secondary";
type iconName = "plus" | "delete 2" | "right" | "left"| "check"| "search"| "x";
type themeIcon = "black" | "white";

export interface IconProps {
  type: typeIcon;
  icon: iconName;
  theme: themeIcon;
}

export const Icon = ({ icon, type, theme}: IconProps): JSX.Element => 
  (
    <img className={styles["icon-" + theme + "-" + icon] } data-testid="Icon" src={"/images/icon/" + theme + "/" + icon + ".svg"} alt="" />
  );

export default Icon;

Icon.defaultProps = {
  type: "primary",
  icon: "plus",
  theme: "black"
}; 

Icon.propTypes = {
  type: PropTypes.oneOf(["outline", "primary", "disabled", "secondary"]),
  theme: PropTypes.oneOf(["black", "white"]),
  icon: PropTypes.oneOf(["plus", "delete 2"])
}; 



