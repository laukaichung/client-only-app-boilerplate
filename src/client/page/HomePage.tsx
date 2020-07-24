import * as React from "react";
import { FunctionComponent } from "react";
import { Container } from "semantic-ui-react";
import { WhiteSpace } from "../component/WhiteSpace";
import { CustomButton } from "../component/FrameworkWrapper";
import { useNavigate } from "react-router";
import pagePath from "../util/PagePath";

const HomePage: FunctionComponent = () => {
  const navigate = useNavigate();
  return (
    <Container>
      <WhiteSpace>This is the Home Page</WhiteSpace>
      <CustomButton
        onClick={() => {
          navigate(pagePath.workerProfile);
        }}
      >
        Navigate Worker Page
      </CustomButton>
      <CustomButton
        onClick={() => {
          navigate(pagePath.createWorker);
        }}
      >
        Create Page
      </CustomButton>
    </Container>
  );
};

export default HomePage;
