import { rootStoreType } from "../../../app/store";

export const getIsAuthUser = (state: rootStoreType) => state.auth.isAuth; 
export const getCaptcha = (state: rootStoreType) => state.auth.captchaUrl;