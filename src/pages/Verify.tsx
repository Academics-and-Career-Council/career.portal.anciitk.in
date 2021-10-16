import { useEffect, useState } from "react";
import type { AxiosError } from "axios";
import { useRecoilState } from "recoil";
import { RouteComponentProps, useLocation } from "react-router";
import { Result, Button } from "antd";
import VerifyComponent from "@anciitk/kratos-verify-session";
import { Xenon } from "@anciitk/xenon-js"

import { ory } from "../services/kratos";
import { SESSION_STATE } from "../store";
import Loader from "../components/loader";

const Verify: React.FC<RouteComponentProps> = ({ history }) => {
  const [sessionState, setSessionState] = useRecoilState(SESSION_STATE);
  const [err, setErr] = useState<AxiosError>();

  const query = new URLSearchParams(useLocation().search);
  const path = query.get("next");
  const xenon = new Xenon(process.env.REACT_APP_XENON_URL || "");

  return (
    <VerifyComponent
      sessionState={sessionState}
      loginUrl={process.env.REACT_APP_LOGIN_URL || ""}
      path={path || ""}
      basePath={process.env.REACT_APP_BASE_URL || ""}
      historyPush = {history.push}
      setSessionState={setSessionState}
      ory={ory}
      xenon={xenon}
    />
  );

  // useEffect(() => {
  //   ory
  //     .toSession()
  //     .then(() => {
  //       setSession((currVal) => ({ ...currVal, active: true }));
  //       ory
  //         .createSelfServiceLogoutFlowUrlForBrowsers()
  //         .then(({ data }) => {
  //           setSession((currVal) => ({
  //             ...currVal,
  //             logoutUrl: data.logout_url || "",
  //           }));
  //         })
  //         .catch((err: AxiosError) => {
  //           return Promise.reject(err);
  //         });
  //       history.push(`/${path}`);
  //     })
  //     .catch((err: AxiosError) => {
  //       switch (err.response?.status) {
  //         case 403:
  //         case 401:
  //           window.location.href = `${process.env.REACT_APP_LOGIN_URL}?return_to=${process.env.REACT_APP_BASE_URL}/${path}`;
  //           return;
  //       }
  //       setErr(err);
  //       return Promise.reject(err);
  //     });
  // }, []);

  // return (
  //   <div>
  //     {err ? (
  //       <Result
  //         status="error"
  //         title={err.message + "!"}
  //         subTitle={`${err.response?.status} ${err.response?.statusText}`}
  //         extra={[
  //           <a href={process.env.REACT_APP_LOGIN_URL}>
  //             <Button type="primary">Go to Login</Button>
  //           </a>,
  //         ]}
  //       />
  //     ) : (
  //       <Loader />
  //     )}
  //   </div>
  // );
};

export default Verify;