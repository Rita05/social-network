//types
import { AuthUserType } from "../../../common/types/auth";

const SET_AUTH_DATA = 'auth/SET_AUTH_DATA';
const GET_CAPTCHA_URL = 'GET-CAPTCHA-URL';

export type SetAuthUserDataActionType = ReturnType<typeof setAuthUserDataAction>;

export type GetCaptchaUrlActionType = ReturnType<typeof getCaptchaUrlAction>;

export const setAuthUserDataAction = (payload: AuthUserType) =>
	({ type: SET_AUTH_DATA, payload }) as const;

export const getCaptchaUrlAction = (url: string) => ({type: GET_CAPTCHA_URL, payload: {url}}) as const;