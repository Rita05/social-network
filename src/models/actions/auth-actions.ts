//types
import { AuthUserType } from "../../types/auth";

const SET_AUTH_DATA = 'SET_AUTH_DATA';

export type setAuthUserDataActionType = ReturnType<typeof setAuthUserDataAction>;

export const setAuthUserDataAction = (payload: AuthUserType) =>
	({ type: SET_AUTH_DATA, payload }) as const;