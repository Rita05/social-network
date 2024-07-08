//types
import { AuthUserType } from "../../../common/types/auth";

const SET_AUTH_DATA = 'auth/SET_AUTH_DATA';

export type setAuthUserDataActionType = ReturnType<typeof setAuthUserDataAction>;

export const setAuthUserDataAction = (payload: AuthUserType) =>
	({ type: SET_AUTH_DATA, payload }) as const;