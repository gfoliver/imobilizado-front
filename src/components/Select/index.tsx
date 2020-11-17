import React, { useEffect, useRef } from 'react';
import { useField } from '@unform/core';
import ReactSelect, {Props, OptionTypeBase} from 'react-select';
import { useTheme } from 'styled-components';

interface SelectProps extends Props<OptionTypeBase> {
    name: string;
};

const Select: React.FC<SelectProps> = ({ name, options, ...rest }) => {
    const theme = useTheme();
    const selectRef = useRef(null);
    const { fieldName, registerField, defaultValue, error, clearError } = useField(name);

    useEffect(() => {
        registerField({
            name: fieldName,
            ref: selectRef.current,
            getValue: (ref: any) => {
                if (rest.isMulti) {
                    if (!ref.state.value) {
                        return [];
                    }

                    return ref.state.value.map((option: OptionTypeBase) => option.value);
                } 
                else {
                    if (!ref.state.value) {
                        return "";
                    }

                    return ref.state.value.value;
                }
            }
        })
    }, [registerField, fieldName, rest.isMulti]);

    return (
        <ReactSelect 
            ref={selectRef} 
            defaultValue={defaultValue}
            options={options}
            styles={{
                control: (defaultStyle, state) => ({
                    ...defaultStyle,
                    background: 'rgba(255,255,255,0.05)',
                    borderWidth: 1,
                    borderColor: theme.colors.inputBorder,
                    borderRadius: 4,
                    color: theme.colors.text,
                    padding: "16px 24px"
                }),
                menuList: (defaultStyle) => ({
                    ...defaultStyle,
                    background: theme.colors.cardLighter,
                    color: theme.colors.text
                }),
                singleValue: () => ({
                    color: theme.colors.text,
                    fontSize: 16
                }),
                valueContainer: (defaultStyle) => ({
                    ...defaultStyle,
                    padding: 0,
                }),
                input: () => ({
                    lineHeight: "1em",
                    margin: 0,
                    color: theme.colors.text
                }),
                option: (defaultStyle, { isSelected }) => ({
                    ...defaultStyle,
                    background: theme.colors.cardLighter,
                    color: theme.colors.text,
                    '&:hover': {
                        background: theme.colors.primary,
                    }
                }),
                indicatorSeparator: () => ({
                    display: "none"
                }),
                dropdownIndicator: () => ({
                    padding: 0,
                    svg: {
                        height: 16,
                        width: 16,
                    }
                })
            }}
            {...rest} 
        />
    );
}
export default Select;