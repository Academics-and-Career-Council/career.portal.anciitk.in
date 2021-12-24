import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { RecoilRoot } from "recoil";
import { RelayEnvironmentProvider } from "react-relay/hooks";
import "antd/dist/antd.css";
import "@anciitk/kratos-verify-session/dist/index.css";

import environment from "./relay/environment";

ReactDOM.render(
  <React.StrictMode>
    <RelayEnvironmentProvider environment={environment}>
      <RecoilRoot>
        <App />
      </RecoilRoot>
    </RelayEnvironmentProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
