//types
import { AnyAction, Dispatch } from "redux";
import { rootStoreType } from "../store";

//selectors
import { getAuthUser } from "./auth-reducer";

//types
import { setInitializedAction, SetInitializedActionActionType } from "../actions/app-actions";
import { ThunkDispatch } from "redux-thunk";

type AppInitialState = {
	initialized: boolean
}

const initialAppState = {
	initialized: false
}

export type AppActionsType = SetInitializedActionActionType;

export const appReducer = (state: AppInitialState = initialAppState, action: AppActionsType) => {

	switch (action.type) {
		case 'SET-INITIALIZED':
			return {
				...state,
				initialized: action.payload
			}
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
			console.log('error: ', error);
		})
}
