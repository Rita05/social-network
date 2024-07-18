import { AnyAction, Dispatch } from "redux";
import { stopSubmit } from "redux-form";

//actions
import { setRequestStatusAction, SetRequestStatusActionType } from "../../../models/actions";
import { handleServerNetworkError } from "../../../common/utils/error-utils";

//api
import { AuthApi, securityApi } from "../api";
import { ErrorType, STATUS_CODE } from "../../../common/api/common-api";

//types
import { getCaptchaUrlAction, GetCaptchaUrlActionType, setAuthUserDataAction, SetAuthUserDataActionType } from "./auth-actions";
import { ThunkDispatch } from "redux-thunk";
import { rootStoreType } from "../../../app/store";
import { SetAppErrorActionType } from "../../../app/model/app-actions";

export type AuthUserStateType = {
	id: number | null,
	email: string | null,
	login: string | null,
	isAuth: boolean
	captchaUrl: string | null
}

export type AuthUserActionsType = 
	|SetAuthUserDataActionType 
	| GetCaptchaUrlActionType
	| SetAppErrorActionType 
	| SetRequestStatusActionType

const initialAuthState: AuthUserStateType = {
	id: null,
	email: null,
	login: null,
	isAuth: false,
	captchaUrl: null
}

export const authReducer = (state: AuthUserStateType = initialAuthState, action: AuthUserActionsType) => {

	switch (action.type) {
		case 'auth/SET_AUTH_DATA':
			return {
				...state,
				...action.payload,
				isAuth: action.payload.isAuth
			}
		case 'GET-CAPTCHA-URL':
			return {
				...state,
				captchaUrl: action.payload.url
			}
		default:
			return state;
	}
}

//thunks
export const getAuthUser = () => async (dispatch: Dispatch<AuthUserActionsType>) => {
	dispatch(setRequestStatusAction('loading'));
	try {
		const result = await AuthApi.getCurrentUser();
		if (result.resultCode === STATUS_CODE.SUCCESS) {
			dispatch(setRequestStatusAction('succeeded'));
			dispatch(setAuthUserDataAction({ ...result.data, isAuth: true }));
		}
	} catch (error) {
		handleServerNetworkError(error as Error, dispatch);
	}
}

export const loginUser = (email: string, password: string, rememberMe: boolean, captcha: string | null = null ) => async (dispatch: ThunkDispatch<rootStoreType, unknown, AnyAction>) => {
	dispatch(setRequestStatusAction('loading'));
	try {
		const response = await AuthApi.login(email, password, rememberMe, captcha);
		if (response.resultCode === STATUS_CODE.SUCCESS) {
			dispatch(setRequestStatusAction('succeeded'));
			dispatch(getAuthUser());
		} else {
			if (response.resultCode === 10) {
				dispatch(getCaptchaUrl());
			}
			const errorMessage = response.messages.length > 0 ? response.messages[0] : 'Ошибка';
			dispatch(stopSubmit("Login", { _error: errorMessage }));
		}
	} catch (error) {
		handleServerNetworkError(error as Error, dispatch);
	}
}

export const logOutUser = () => async (dispatch: ThunkDispatch<rootStoreType, unknown, AnyAction>) => {
	dispatch(setRequestStatusAction('loading'));
	try {
		const response = await AuthApi.logOut();
		if (response.resultCode === STATUS_CODE.SUCCESS) {
			dispatch(setRequestStatusAction('succeeded'));
			dispatch(setAuthUserDataAction({ id: null, email: null, login: null, isAuth: false }));
		}
	} catch (error) {
		handleServerNetworkError(error as Error, dispatch);
	}
}

export const getCaptchaUrl = () => async(dispatch: Dispatch<AuthUserActionsType>) => {
	dispatch(setRequestStatusAction('loading'));
	try { 
		const response = await securityApi.getCaptcha();
		const captchaUrl = response.data.url;
		dispatch(getCaptchaUrlAction(captchaUrl));
	} catch (error) {
		handleServerNetworkError(error as Error, dispatch);
	}
}	
