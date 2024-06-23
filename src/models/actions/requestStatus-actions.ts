export type RequestStatusType = 'idle' | 'loading' | 'succeeded' | 'failed';

export type RequestStatusActionsType = SetRequestStatusActionType

export type SetRequestStatusActionType = ReturnType<typeof setRequestStatusAction>

export const setRequestStatusAction = (status: RequestStatusType) => {
	return {
		type: 'SET-REQUEST-STATUS',
		status
	} as const
}
