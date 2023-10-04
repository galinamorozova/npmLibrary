import React from 'react';
import styles from './Select2.module.css';
import Select, {MultiValue, StylesConfig} from 'react-select';
import makeAnimated from 'react-select/animated';
import PropTypes from "prop-types";

export interface Select2Props {
    title: string,
    multiType: true | false,
    options: SelectOptionType[],
}

export interface SelectOptionType {
    value: string;
    label: string;
};
const SelectStateOption: SelectOptionType[] = [
    {value: 'Option1', label: 'Option1'},
    {value: 'Option2', label: 'Option2'},
    {value: 'Option3', label: 'Option3'},
];
const animatedComponents = makeAnimated();

export const Select2 = ({
                            title,
                            multiType,
                            options,
                            ...props
                        }: Select2Props): JSX.Element => {
    const colourStyles: StylesConfig = {
        control: (styles, state) => ({ ...styles,
            borderColor: state.isFocused ? "#1B3F7F" : "#F3F6F9",
            color: "#4E4E5B",
            ':active': {borderColor: "#1B3F7F"},
            ':hover': {borderColor: "#1B3F7F"},
            boxShadow: "none",
            backgroundColor: '#F3F6F9', minWidth: "200px", fontFamily: "Roboto",
            fontSize: "12px" }),
        option: (styles, { data, isDisabled, isFocused, isSelected }) => {
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
        multiValue: (styles, { data }) => {
            return {
                ...styles,
                backgroundColor: "white",
                borderRadius: "4px",
            };
        },
        multiValueRemove: (styles, { data }) => ({
            ...styles,
            color: "#4E4E5B",
            ':hover': {
                backgroundColor: "white",
            },
        }),
        indicatorSeparator: (styles, { }) => ({
            ...styles,
           display: "none"
        }),

    };
    return (
        <div data-testid="Select2">
            <Select
                isMulti={multiType}
                components={animatedComponents}
                closeMenuOnSelect={false}
                options={options}
                placeholder={title}
                styles={colourStyles}
            />
        </div>
    );
};

export default Select2;

Select2.defaultProps = {
    title: "",
    multiType: true,
    options: SelectStateOption
};

Select2.propTypes = {
    title: PropTypes.string,
    multiType: PropTypes.oneOf([true, false]),
    options: PropTypes.array
};