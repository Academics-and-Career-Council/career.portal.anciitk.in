import { atom } from "recoil";
import { UserCredentials } from "@anciitk/xenon-js";
import { Session } from "@ory/kratos-client";

export interface SessionState {
  active: boolean;
  logoutUrl: string;
  user: UserCredentials;
  session: Session;
}

export const SESSION_STATE = atom<SessionState | undefined>({
  key: "SESSION_STATE",
  default: undefined
});
