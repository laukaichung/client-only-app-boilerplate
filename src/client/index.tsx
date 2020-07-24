import React from "react";
import ReactDOM from "react-dom";
import App from "./page/App";
import { getDBConnection } from "./util/DBClient";

async function bootstrap() {
  await getDBConnection();
  ReactDOM.render(<App />, document.getElementById("root")!);
}

bootstrap();
