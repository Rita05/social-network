import { AnyAction, Dispatch } from "redux";

//actions
import { setRequestStatusAction, SetRequestStatusActionType } from "../../../models/actions";

//api
import { AuthApi } from "../api";
import { STATUS_CODE } from "../../../common/api/common-api";

//types
import { setAuthUserDataAction, setAuthUserDataActionType } from "./auth-actions";
import { ThunkDispatch } from "redux-thunk";
import { rootStoreType } from "../../../app/store";
import { stopSubmit } from "redux-form";

export type AuthUserStateType = {
	id: number | null,
	email: string | null,
	login: string | null,
	isAuth: boolean
}

export type AuthUserActionsType = setAuthUserDataActionType | SetRequestStatusActionType

const initialAuthState: AuthUserStateType = {
	id: null,
	email: null,
	login: null,
	isAuth: false
}

export const authReducer = (state: AuthUserStateType = initialAuthState, action: AuthUserActionsType) => {

	switch (action.type) {
		case 'auth/SET_AUTH_DATA':
			return {
				...state,
				...action.payload,
				isAuth: action.payload.isAuth
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
		dispatch(setRequestStatusAction('failed'));
		console.log(error);
	}
}

export const loginUser = (email: string, password: string, rememberMe: boolean) => async (dispatch: ThunkDispatch<rootStoreType, unknown, AnyAction>) => {
	dispatch(setRequestStatusAction('loading'));
	try {
		const response = await AuthApi.login(email, password, rememberMe);
		if (response.resultCode === STATUS_CODE.SUCCESS) {
			dispatch(setRequestStatusAction('succeeded'));
			dispatch(getAuthUser());
		} else {
			const errorMessage = response.messages.length > 0 ? response.messages[0] : 'Ошибка';
			dispatch(stopSubmit("Login", { _error: errorMessage }));
		}
	} catch (error) {
		dispatch(setRequestStatusAction('failed'));
		console.log(error);
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
		dispatch(setRequestStatusAction('failed'));
		console.log(error);
	}
}

