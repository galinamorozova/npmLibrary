import React from 'react';
import styles from './Download.module.css';
import PropTypes from "prop-types";
import clipIcon from "../../images/clip.svg"

export interface DownloadProps {
    label: string;
    validation: "true" | "false" | "none";
    placeholder: string;
    disabled: true | false;
}

export const Download = ({
                                         label,
                                         validation,
                                         disabled,
                                         placeholder,
                                         ...props
                                     }: DownloadProps): JSX.Element => {
    const scn = ("validation-" + validation);
    return (
  <div className={styles.Download} data-testid="Download">
      <form>
          <h5 className={styles.title}>{label}</h5>
          <label className={styles.downloadContainer}>
              <div className={`${styles[scn]}`}>
                  {validation === "false" ? "Ошибка" : placeholder}
                  <img src={clipIcon} alt="" className={styles.clipIcon}/>
              </div>

              <input
                  className={styles.uploadFile}
                  type="file"
                  multiple
                  name="files[]"
                  disabled={disabled}
                  onChange={() => {}}
              />
          </label>
      </form>
  </div>
)
}

export default Download;

Download.defaultProps = {
    label: "Текст",
    validation: "none",
    placeholder: "Документ",
    disabled: false,
};
Download.propTypes = {
    label: PropTypes.string,
    placeholder: PropTypes.string,
    validation: PropTypes.oneOf(["true", "false", "none"]),
    disabled: PropTypes.oneOf([true, false]),
};
