import { Configuration, V0alpha1Api } from "@ory/kratos-client";
import instance from "./axios";

export const ory = new V0alpha1Api(
  new Configuration({
    basePath: process.env.REACT_APP_KRATOS_BASE,
  }),
  process.env.REACT_APP_KRATOS_BASE,
  instance
);
