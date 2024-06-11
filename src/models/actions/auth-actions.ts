//types
import { AuthUserType } from "../../types/auth";

const SET_AUTH_DATA = 'SET_AUTH_DATA';

export type setAuthUserDataActionType = ReturnType<typeof setAuthUserDataAction>;

export const setAuthUserDataAction = (data: AuthUserType) =>
	({ type: SET_AUTH_DATA, data }) as const;