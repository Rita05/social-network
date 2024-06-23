
//types
import { RequestStatusType, SetRequestStatusActionType } from "../actions/requestStatus-actions";

const initialState = {
	status: 'idle' as RequestStatusType
}

type InitialStateType = typeof initialState;

export const requestStatusReducer = (state: InitialStateType = initialState, action: SetRequestStatusActionType): InitialStateType => {
	switch (action.type) {
		case 'SET-REQUEST-STATUS':
			return { ...state, status: action.status }
		default:
			return state
	}
}


