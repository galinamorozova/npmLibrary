import PropTypes from "prop-types";
import React from 'react';
import styles from  './Icon.module.css';
import plusW from "./../../images/icon/white/plus.svg";
import rightW from "./../../images/icon/white/right.svg";
import leftW from "./../../images/icon/white/left.svg";
import checkW from "./../../images/icon/white/check.svg";
import searchW from "./../../images/icon/white/search.svg";
import xW from "./../../images/icon/white/x.svg";
import plusB from "./../../images/icon/black/plus.svg";
import rightB from "./../../images/icon/black/right.svg";
import leftB from "./../../images/icon/black/left.svg";
import checkB from "./../../images/icon/black/check.svg";
import searchB from "./../../images/icon/black/search.svg";
import xB from "./../../images/icon/black/x.svg";

type typeIcon = "outline" | "primary" | "disabled" | "secondary";
type iconName = "plus" | "right" | "left"| "check"| "search"| "x";
type themeIcon = "black" | "white";

export interface IconProps {
  type: typeIcon;
  icon: iconName;
  theme: themeIcon;
}

export const Icon = ({ icon, type, theme}: IconProps): JSX.Element =>
    ( <>
      { (icon==="plus"&& theme==="white") && <img className={styles["icon-" + theme + "-" + icon] } data-testid="Icon" src={plusW} alt="" />}
      { (icon==="right"&& theme==="white") && <img className={styles["icon-" + theme + "-" + icon] } data-testid="Icon" src={rightW} alt="" />}
      { (icon==="left"&& theme==="white") && <img className={styles["icon-" + theme + "-" + icon] } data-testid="Icon" src={leftW} alt="" />}
      { (icon==="check"&& theme==="white") && <img className={styles["icon-" + theme + "-" + icon] } data-testid="Icon" src={checkW} alt="" />}
      { (icon==="search"&& theme==="white") && <img className={styles["icon-" + theme + "-" + icon] } data-testid="Icon" src={searchW} alt="" />}
      { (icon==="x"&& theme==="white") && <img className={styles["icon-" + theme + "-" + icon] } data-testid="Icon" src={xW} alt="" />}
      { (icon==="plus"&& theme==="black") && <img className={styles["icon-" + theme + "-" + icon] } data-testid="Icon" src={plusB} alt="" />}
      { (icon==="right"&& theme==="black") && <img className={styles["icon-" + theme + "-" + icon] } data-testid="Icon" src={rightB} alt="" />}
      { (icon==="left"&& theme==="black") && <img className={styles["icon-" + theme + "-" + icon] } data-testid="Icon" src={leftB} alt="" />}
      { (icon==="check"&& theme==="black") && <img className={styles["icon-" + theme + "-" + icon] } data-testid="Icon" src={checkB} alt="" />}
      { (icon==="search"&& theme==="black") && <img className={styles["icon-" + theme + "-" + icon] } data-testid="Icon" src={searchB} alt="" />}
      { (icon==="x"&& theme==="black") && <img className={styles["icon-" + theme + "-" + icon] } data-testid="Icon" src={xB} alt="" />}
    </>);

export default Icon;

Icon.defaultProps = {
  type: "primary",
  icon: "plus",
  theme: "black"
};

Icon.propTypes = {
  type: PropTypes.oneOf(["outline", "primary", "disabled", "secondary"]),
  theme: PropTypes.oneOf(["black", "white"]),
  icon: PropTypes.oneOf(["plus", "right", "left", "check", "search", "x"])
}; 



