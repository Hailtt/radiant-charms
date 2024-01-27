import { BrowserRouter, Router, Route, Routes } from "react-router-dom";
import React, { Fragment, useState } from "react";
import "./scss/main.scss";
import { PRIVATE_ROUTERS, PUBLIC_ROUTERS } from "./router/router";
function App() {
  const [isLogin, setIslogin] = useState(false);
  return isLogin ? (
    <Routes>
      {" "}
      {PRIVATE_ROUTERS.map((item, idx) => {
        let Layout = Fragment;
        if (item.layout) {
          Layout = item.layout;
        }
        const Page = item.component;
        return (
          <Route
            path={item.path}
            key={idx}
            element={
              <Layout>
                <Page />
              </Layout>
            }
          />
        );
      })}{" "}
    </Routes>
  ) : (
    <Routes>
      {" "}
      {PUBLIC_ROUTERS.map((item, idx) => {
        let Layout = Fragment;
        if (item.layout) {
          Layout = item.layout;
        }
        const Page = item.component;
        return (
          <Route
            path={item.path}
            key={idx}
            element={
              <Layout>
                <Page />
              </Layout>
            }
          />
        );
      })}{" "}
    </Routes>
  );
}

export default App;
