import "@babel/polyfill";
import React, { FunctionComponent, ReactNode, useEffect, Suspense } from "react";
import ThemeProvider from "../context/ThemeProvider";
import { CustomLoader } from "../component/FrameworkWrapper";
import { pageMap } from "../pageMap";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import {getDBConnection} from "../util/DBClient";
import { ReactQueryConfigProvider } from "react-query";
import { ErrorBoundary } from "react-error-boundary";

const queryConfig = {
  shared: {
    suspense: true,
    error: true,
  },
};

const App: FunctionComponent = () => {
  useEffect(() => {
    getDBConnection().catch((err) => {
      console.log(err);
    });
  }, []);
  return (
      <ReactQueryConfigProvider config={queryConfig}>
        <ErrorBoundary fallbackRender={() => <ErrorFallback />}>
          <Suspense fallback={<RouteLoader />}>
            <BrowserRouter>
              <ContextWrapper>
                <BaseLayout>
                  <Routes>
                    {pageMap.map(({ path, Component }) => (
                        <Route key={path} path={path}>
                          <Component />
                        </Route>
                    ))}
                  </Routes>
                </BaseLayout>
              </ContextWrapper>
            </BrowserRouter>
          </Suspense>
        </ErrorBoundary>
      </ReactQueryConfigProvider>
  );
};
const BaseLayout = ({ children }: { children: ReactNode }) => {
  return <div>{children}</div>;
};

export const RouteLoader = () => {
  return (
    <div style={{ height: 1200 }} className="screenCenter">
      <CustomLoader active size="large" content="Loading" />
    </div>
  );
};

interface WrapperProps {
  children: ReactNode;
}

const ContextWrapper = ({ children }: WrapperProps) => {
  return <ThemeProvider>{children}</ThemeProvider>;
}

const ErrorFallback = () => {
  return <div>There was an error! </div>;
};


export default App;
