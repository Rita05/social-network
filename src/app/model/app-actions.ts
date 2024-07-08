
const SET_INITIALIZED = 'SET-INITIALIZED';

export type SetInitializedActionActionType = ReturnType<typeof setInitializedAction>;

export const setInitializedAction = (payload: boolean) =>
	({ type: SET_INITIALIZED, payload }) as const;