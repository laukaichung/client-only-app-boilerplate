import React from "react";
import { useField } from "react-final-form";
import { FormFieldCore } from "../../model/CustomType";
import { CustomCheckBox } from "../FrameworkWrapper";

interface Props extends FormFieldCore {
  onChange?: (checked: boolean) => void;
}

export const CheckBoxField = ({ name, onChange, ...restProps }: Props) => {
  const { input } = useField(name);
  return (
    <CustomCheckBox
      name={name}
      checked={!!input.value}
      onChange={(checked) => {
        input.onChange(checked);
        if (onChange) onChange(checked);
      }}
      {...restProps}
    />
  );
};
