import { useEffect, useState } from "react";
import type { AxiosError } from "axios";
import { useSetRecoilState } from "recoil";
import { RouteComponentProps, useLocation } from "react-router";
import { Result, Button } from "antd";

import { ory } from "../services/kratos";
import { SESSION_STATE } from "../store";
import Loader from "../components/loader";
import { loginUrl } from "../assets/settings";

const Verify: React.FC<RouteComponentProps> = ({ history }) => {
  const setSession = useSetRecoilState(SESSION_STATE);
  const [err, setErr] = useState<AxiosError>();

  const query = new URLSearchParams(useLocation().search);
  const path = query.get("next");

  useEffect(() => {
    ory
      .toSession()
      .then(() => {
        setSession((currVal) => ({ ...currVal, active: true }));
        ory
          .createSelfServiceLogoutFlowUrlForBrowsers()
          .then(({ data }) => {
            setSession((currVal) => ({
              ...currVal,
              logoutUrl: data.logout_url || "",
            }));
          })
          .catch((err: AxiosError) => {
            return Promise.reject(err);
          });
        history.push(`/${path}`);
      })
      .catch((err: AxiosError) => {
        switch (err.response?.status) {
          case 403:
          case 401:
            window.location.href = `${loginUrl}?next=${path}`;
            return;
        }
        setErr(err);
        return Promise.reject(err);
      });
  }, []);

  return (
    <div>
      {err ? (
        <Result
          status="error"
          title={err.message + "!"}
          subTitle={`${err.response?.status} ${err.response?.statusText}`}
          extra={[
            <a href={loginUrl}>
              <Button type="primary">Go to Login</Button>
            </a>,
          ]}
        />
      ) : (
        <Loader />
      )}
    </div>
  );
};

export default Verify;
