import React from 'react';
import styles from './OrdinarySelect.module.css';
import Select, {MultiValue, StylesConfig} from 'react-select';
import makeAnimated from 'react-select/animated';
import PropTypes from "prop-types";

export interface OrdinarySelectProps {
    title: string,
    multiType: true | false,
    options: OrdinarySelectType[],
    width?: string,
    onChange?: () => void
}

export interface OrdinarySelectType {
    value: string;
    label: string;
};
const StateOption: OrdinarySelectType[] = [
    {value: 'Option1', label: 'Option1'},
    {value: 'Option2', label: 'Option2'},
    {value: 'Option3', label: 'Option3'},
];
const animatedComponents = makeAnimated();

export const OrdinarySelect = ({
                                   title,
                                   multiType,
                                   options,
                                   onChange,
                                   width,
                                   ...props
                               }: OrdinarySelectProps): JSX.Element => {
    const colourStyles: StylesConfig = {
        control: (styles, state) => ({
            ...styles,
            borderColor: state.isFocused ? "#1B3F7F" : "#F3F6F9",
            color: "#4E4E5B",
            ':active': {
                borderColor: "#1B3F7F",
            },
            ':hover': {borderColor: "#1B3F7F"},
            boxShadow: "none",
            backgroundColor: '#F3F6F9', minWidth: "200px", fontFamily: "Roboto",
            fontSize: "12px",
            textAlign: "left",
            // paddingTop: "5px",
            // paddingBottom: "-5px"
        }),
        option: (styles, {data, isDisabled, isFocused, isSelected}) => {
            return {
                ...styles,
                backgroundColor: isDisabled
                    ? undefined
                    : isSelected
                        ? "#F3F6F9"
                        : isFocused
                            ? "#F3F6F9"
                            : undefined,
                color: isDisabled
                    ? '#ccc'
                    : isSelected
                        ? '#808089'
                        : '#808089',
                cursor: isDisabled ? 'not-allowed' : 'default',
                fontFamily: "Roboto",
                fontSize: "12px",

                ':active': {
                    ...styles[':active'],
                    backgroundColor: !isDisabled
                        ? isSelected
                            ? "#F3F6F9"
                            : "#F3F6F9"
                        : undefined,
                    color: isDisabled
                        ? '#ccc'
                        : isSelected
                            ? 'red'
                            : '#808089',
                },
                ':hover': {
                    ...styles[':active'],
                    backgroundColor: !isDisabled
                        ? isSelected
                            ? "#F3F6F9"
                            : "#F3F6F9"
                        : undefined,
                    color: '#4E4E5B',
                },
            };
        },
        multiValue: (styles, {data}) => {
            return {
                ...styles,
                background: "none",
                marginLeft: "-3px",
                marginTop: "10%",
                borderRadius: "4px",
                textAlign: "left"
            };
        },
        valueContainer: (styles) => {
            return {
                ...styles,
                paddingTop: "7px",
            };
        },
        singleValue: (styles) => {
            return {
                ...styles,
                color: "#4E4E5B",
            };
        },

        multiValueRemove: (styles, {data}) => ({
            ...styles,
            color: "#F3F6F9",
            ':hover': {
                background: "none",
            },
        }),
        indicatorSeparator: (styles, {}) => ({
            ...styles,
            display: "none"
        }),
        placeholder: (styles, {}) => ({
            ...styles,
            display: "none"
        }),

    };
    return (
        <div data-testid="Select3" className={styles.select3} style={{width: width}}>
            <div className={styles.selectWrapper} style={{width: width}}>
                <Select
                    isMulti={false}
                    components={animatedComponents}
                    closeMenuOnSelect={false}
                    options={options}
                    styles={colourStyles}
                    onChange={onChange}
                />
                <p className={styles.title}>{title}</p>
            </div>
        </div>
    );
};

export default OrdinarySelect;

OrdinarySelect.defaultProps = {
    title: "",
    multiType: true,
    options: StateOption,
    width: "fit-content"
};

OrdinarySelect.propTypes = {
    title: PropTypes.string,
    width: PropTypes.string,
    multiType: PropTypes.oneOf([true, false]),
    options: PropTypes.array
};