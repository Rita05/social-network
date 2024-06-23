import { Dispatch } from "redux";

//actions
import { setRequestStatusAction, SetRequestStatusActionType } from "../actions";

//api
import { AuthApi } from "../../api/auth";
import { STATUS_CODE } from "../../api/common-api";

//types
import { setAuthUserDataAction, setAuthUserDataActionType } from "../actions/auth-actions";

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
		case 'SET_AUTH_DATA':
			return {
				...state,
				...action.data,
				isAuth: true
			}
		default:
			return state;
	}
}

//thunks
export const getAuthUser = () => async (dispatch: Dispatch<AuthUserActionsType>) => {
	dispatch(setRequestStatusAction('loading'));
	try {
		const result = await AuthApi.getCurrentUser()
		if (result.resultCode === STATUS_CODE.SUCCESSS) {
			dispatch(setRequestStatusAction('succeeded'));
			dispatch(setAuthUserDataAction(result.data));
		}
	} catch (error) {
		dispatch(setRequestStatusAction('failed'));
		console.log(error);
	}
}


