import { atom } from "recoil";
import {SessionState} from '@anciitk/kratos-verify-session'

export const SESSION_STATE = atom<SessionState | undefined>({
  key: "SESSION_STATE",
  default: undefined
});
