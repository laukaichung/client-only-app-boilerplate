import "@babel/polyfill";
import React, { FunctionComponent, ReactNode } from "react";
import ThemeProvider from "../context/ThemeProvider";
import { CustomLoader } from "../component/FrameworkWrapper";
import { pageMap } from "../pageMap";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const App: FunctionComponent = () => (
  <React.Suspense fallback={<RouteLoader />}>
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
  </React.Suspense>
);

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
};

export default App;
