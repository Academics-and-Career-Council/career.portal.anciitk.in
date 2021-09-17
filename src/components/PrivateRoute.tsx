import React from "react";
import { Route, RouteComponentProps, Redirect } from "react-router-dom";
import { useRecoilValue } from "recoil";

import { SESSION_STATE } from "../store";
const { Fragment } = React;

const PrivateRoute = (props: {
  component: React.FC<RouteComponentProps>;
  path: string;
}) => {
  const session = useRecoilValue(SESSION_STATE);
  const { component: Component, path, ...rest } = props;
  const pathname = window.location.pathname.substring(1);

  return (
    <Fragment>
      <Route
        {...rest}
        path={path}
        render={(props) => {
          return session.active ? (
            <Component {...props} />
          ) : (
            <Redirect to={`/verify?return_to=${pathname}`} />
          );
        }}
      />
    </Fragment>
  );
};

export default PrivateRoute;
