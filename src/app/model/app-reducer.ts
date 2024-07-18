import { AnyAction, Dispatch } from "redux";
import { rootStoreType } from "../store";

//selectors
import { getAuthUser } from "../../features/login/model/auth-reducer";import { handleServerNetworkError } from "../../common/utils/error-utils";

//types
import { SetAppErrorActionType, setInitializedAction, SetInitializedActionActionType } from "./app-actions";
import { ThunkDispatch } from "redux-thunk";

type AppInitialState = {
	initialized: boolean
	errors: string | string[]
}

const initialAppState = {
	initialized: false,
	errors: []
}

export type AppActionsType = SetInitializedActionActionType | SetAppErrorActionType;

export const appReducer = (state: AppInitialState = initialAppState, action: AppActionsType) => {

	switch (action.type) {
		case 'SET-INITIALIZED':
			return {
				...state,
				initialized: action.payload
			}
			case 'SET-ERROR':
				return { ...state, errors: action.errors }
		default:
			return state;
	}
}

//thunks
export const initializeApp = () => (dispatch: ThunkDispatch<rootStoreType, unknown, AppActionsType>) => {
	Promise.all([dispatch(getAuthUser())])
		.then(() => {
			dispatch(setInitializedAction(true));
		})
		.catch((error) => {
			handleServerNetworkError(error as Error, dispatch);
		})
}
