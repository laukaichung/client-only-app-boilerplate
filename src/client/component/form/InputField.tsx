import React from "react";
import { FormField, InputProps } from "semantic-ui-react";
import { useField } from "react-final-form";
import { ErrorLabel } from "./ErrorLabel";
import InputLabel from "./InputLabel";
import { FormFieldCore } from "../../model/CustomType";
import { CustomInput, CustomLabel } from "../FrameworkWrapper";
import { parseNumber } from "../../util/StringUtil";

interface InputFormFieldProps extends FormFieldCore {
  type?: "number" | "text" | "password";
  hint?: string;
  manualOnChange?: (val: any) => void;
  semanticInputProps?: InputProps;
  onKeyDown?: (obj) => void;
}

export const InputFormField = ({
  label,
  manualOnChange,
  hint,
  name,
  semanticInputProps,
  type,
  ...inputFieldProps
}: InputFormFieldProps) => {
  const { input } = useField(name);
  return (
    <FormField>
      {hint != null && <CustomLabel pointing="below">{hint}</CustomLabel>}
      {label && <InputLabel>{label}</InputLabel>}
      <CustomInput
        {...inputFieldProps}
        {...semanticInputProps}
        {...input}
        type={type}
        onChange={(event, { value }) => {
          if (type === "number") {
            // todo untested!
            value = parseNumber(value) as any;
            value = isNaN(value as any) ? "" : value;
          }
          input.onChange(value);
          if (manualOnChange) manualOnChange(value);
        }}
      />
      <ErrorLabel name={name} />
    </FormField>
  );
};
