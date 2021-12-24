import { useRecoilState } from "recoil";
import { RouteComponentProps, useLocation } from "react-router";
import VerifyComponent from "@anciitk/kratos-verify-session";
import { Xenon } from "@anciitk/xenon-js";

import { ory } from "../services/kratos";
import { SESSION_STATE } from "../store";

const Verify: React.FC<RouteComponentProps> = ({ history }) => {
  const [sessionState, setSessionState] = useRecoilState(SESSION_STATE);

  const query = new URLSearchParams(useLocation().search);
  const path = query.get("next");
  const xenon = new Xenon(process.env.REACT_APP_XENON_URL || "");

  return (
    <VerifyComponent
      sessionState={sessionState}
      loginUrl={`${process.env.REACT_APP_LOGIN_URL}`}
      path={`${path}`}
      basePath={`${process.env.REACT_APP_BASE_URL}`}
      historyPush={history.push}
      setSessionState={setSessionState}
      ory={ory}
      xenon={xenon}
    />
  );
};

export default Verify;
