
const SET_INITIALIZED = 'SET-INITIALIZED';
const SET_ERROR = 'SET-ERROR'

export type SetInitializedActionActionType = ReturnType<typeof setInitializedAction>;
export type SetAppErrorActionType = ReturnType<typeof setAppErrorAction>

export const setInitializedAction = (payload: boolean) =>
	({ type: SET_INITIALIZED, payload }) as const;

export const setAppErrorAction = (errors: string | string[]) => ({ type: SET_ERROR, errors } as const)