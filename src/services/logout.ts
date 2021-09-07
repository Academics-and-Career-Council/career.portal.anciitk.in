import axios, { AxiosError } from "axios";
import type { SetterOrUpdater } from "recoil";

const logout = (
  logoutUrl: string,
  setSession: SetterOrUpdater<{ active: boolean; logoutUrl: string }>
) => {
  axios
    .get(logoutUrl, { withCredentials: true })
    .then(() => setSession({ active: false, logoutUrl: "" }))
    .catch((err: AxiosError) => {
      return Promise.reject(err);
    });
};

export default logout;
