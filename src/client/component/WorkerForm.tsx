import * as React from "react";
import { CustomForm } from "./FrameworkWrapper";
import { InputFormField } from "./form/InputField";
import { SubmitButton } from "./SubmitButton";
import { useForm } from "react-final-form";
import { FunctionComponent } from "react";
import { WhiteSpace } from "./WhiteSpace";

const WorkerForm: FunctionComponent = () => {
  const { submit } = useForm();
  return (
    <CustomForm onSubmit={submit}>
      <InputFormField name="name" />
      <WhiteSpace>
        <SubmitButton />
      </WhiteSpace>
    </CustomForm>
  );
};

export default WorkerForm;
