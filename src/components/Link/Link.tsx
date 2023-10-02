import React from 'react';
import styles from './Link.module.css';
import PropTypes from "prop-types";
import Button from "react-bootstrap/Button";


type themeTab = "bw" | "color";

export interface LinkProps {
  theme: themeTab;
  label: string;
}

export const Link = ({ theme, label, ...props }: LinkProps): JSX.Element =>
(
  <Button className={styles['type-b-w']} data-testid="Link" href="#">
    <img className={styles.tab} src={"/images/assets/tab" + theme + ".svg"} alt="" />
    <span className={styles.text}>{label}</span>
  </Button>
);

export default Link;

Link.defaultProps = {
  theme: "bw",
  label: "Button text"
};

Link.propTypes = {
  theme: PropTypes.oneOf(["bw", "color"]),
  label: PropTypes.string,
};


