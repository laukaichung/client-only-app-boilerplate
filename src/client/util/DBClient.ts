import "reflect-metadata";
import { createConnection, useContainer } from "typeorm";
import Worker from "../entity/Worker";
import { Container } from "typedi";
import * as localForage from "localforage";
/**
 *  How you can persist the sql.js database using localforage
 *  https://github.com/sql-js/sql.js/issues/132#issuecomment-613904440
 */
window.localforage = localForage;

useContainer(Container);

export function getDBConnection() {
    return createConnection({
      type: "sqljs",
      location: "lkc-booker",
      autoSave: true,
      entities: [Worker],
        useLocalForage: true,
      logging: ["query", "schema"],
      synchronize: true,
    });
}
