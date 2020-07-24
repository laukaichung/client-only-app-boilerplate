import React from "react";
import { SelectOption } from "../../model/CustomType";
import { useField } from "react-final-form";
import { SelectProps } from "semantic-ui-react";
import InputLabel from "./InputLabel";
import { ErrorLabel } from "./ErrorLabel";
import { CustomSelect } from "../FrameworkWrapper";
import ObjUtil from "../../util/ObjUtil";

interface SelectFormFieldProps extends Partial<SelectProps> {
  options: SelectOption[];
  isIntValue?: boolean;
  label?: string;
  name: string;
  onChange?: (val: any) => void;
  placeholder?: string;
}

export const SelectFormField = (props: SelectFormFieldProps) => {
  const { label, name, onChange, options, isIntValue, ...restProps } = props;
  const { multiple } = restProps;
  let {
    input: { value: inputValue, onChange: inputOnChange },
  } = useField(name);
  if (multiple) {
    if (!ObjUtil.isArrayWithItems(inputValue)) {
      inputValue = [];
    } else if (isIntValue) {
      inputValue = inputValue.map((o) => parseInt(o));
    }
  }
  return (
    <React.Fragment>
      {label && <InputLabel>{label}</InputLabel>}
      <CustomSelect
        {...restProps}
        value={inputValue ? inputValue : multiple ? [] : null}
        options={options}
        onChange={(value) => {
          if (isIntValue) {
            if (multiple) {
            } else {
              value = parseInt(value as any) as any;
            }
          }
          inputOnChange(value);
          onChange?.(value);
        }}
      />
      <ErrorLabel name={name} />
    </React.Fragment>
  );
};
