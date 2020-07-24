import React from "react";
import { useField } from "react-final-form";
import { ErrorLabel } from "./ErrorLabel";
import { FormField } from "semantic-ui-react";
import InputLabel from "./InputLabel";
import TextareaAutosize from "react-textarea-autosize";
import { FormFieldCore } from "../../model/CustomType";

interface TextAreFormFieldProps extends FormFieldCore {
  minRows?: number;
}

export const TextAreaFormField = ({
  name,
  label,
  ...textAreaProps
}: TextAreFormFieldProps) => {
  const { input } = useField(name);
  return (
    <FormField>
      {label && <InputLabel>{label}</InputLabel>}
      <TextareaAutosize
        onChange={(event, value) => input.onChange(value)}
        {...input}
        placeholder="Enter Text"
        {...textAreaProps}
      />
      <ErrorLabel name={name} />
    </FormField>
  );
};
