import "reflect-metadata";
import { createConnection, useContainer } from "typeorm";
import Worker from "../entity/Worker";
import { Container } from "typedi";

useContainer(Container);

export function getDBConnection() {
  try {
    return createConnection({
      type: "sqljs",
      location: "lkc-booker",
      autoSave: true,
      entities: [Worker],
      logging: ["query", "schema"],
      synchronize: true,
    });
  } catch (error) {
    document.write("<b>Error: ", JSON.stringify(error, null, 2), "</b>");
    console.log("Error: ", error);
  }
}
