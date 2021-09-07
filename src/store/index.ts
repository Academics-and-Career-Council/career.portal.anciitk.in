import { atom } from "recoil";

export const SESSION_STATE = atom({
  key: "SESSION_STATE",
  default: { active: false, logoutUrl: "" },
});
