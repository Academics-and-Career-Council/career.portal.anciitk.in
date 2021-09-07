import { Configuration, V0alpha1Api } from "@ory/kratos-client";
import instance from "./axios";
import { kratosBase } from "../assets/settings";

export const ory = new V0alpha1Api(
  new Configuration({
    basePath: kratosBase,
  }),
  kratosBase,
  instance
);
