import { lazy, LazyExoticComponent } from "react";
import pagePath from "./util/PagePath";
declare let System: any;

interface Page {
  path: string;
  Component: LazyExoticComponent<any>;
}

const { createWorker, homePage, workerProfile } = pagePath;

export const pageMap: Page[] = [
  {
    path: createWorker,
    Component: lazy(() => System.import("./page/CreateWorkerPage")),
  },
  {
    path: homePage,
    Component: lazy(() => System.import("./page/HomePage")),
  },
  {
    path: workerProfile,
    Component: lazy(() => System.import("./page/WorkerPage")),
  },
];
