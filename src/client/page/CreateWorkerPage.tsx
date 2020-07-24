import * as React from "react";
import WorkerForm from "../component/WorkerForm";
import { Container } from "semantic-ui-react";
import { FunctionComponent } from "react";

const CreateWorkerPage: FunctionComponent = () => {
  return (
    <Container>
      <WorkerForm />
    </Container>
  );
};

export default CreateWorkerPage;
