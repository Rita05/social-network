import { rootStoreType } from "../../../app/store";

export const getIsAuthUser = (state: rootStoreType) => state.auth.isAuth; 
export const getAuthUserId = (state: rootStoreType) => state.auth.id;
export const getCaptcha = (state: rootStoreType) => state.auth.captchaUrl;