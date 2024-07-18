import { Dispatch } from "redux";

//utils
import { updateUserFollowStatus } from "../../../../common/utils/updateUserFollowStatus";
import { handleServerNetworkError } from "../../../../common/utils/error-utils";

//actions
import { addUsersAction, AddUsersActionType, DragUsersActionType, followAction, FollowUserActionType, setCurrentPageAction, SetCurrentPageActionType, setIsFollowingInProgressAction, SetIsFollowingInProgressActionType, setTotalUsersCountAction, SetTotalUsersCountActionType, unFollowAction, UnFollowUserActionType } from "./users-actions";

//api
import { UsersApi } from "../api";
import { ApiResponseType, STATUS_CODE } from "../../../../common/api/common-api";

//types
import { User } from "../../../../common/types/users";
import { setRequestStatusAction, SetRequestStatusActionType } from "../../../../models/actions/requestStatus-actions";
import { SetAppErrorActionType } from "../../../../app/model/app-actions";

export type UsersPageType = {
	users: Array<User>
	pageSize: number
	currentPage: number
	totalUsersCount: number
	portionSize: number
	followingInProgress: Array<number>
}

export type UsersActionsType =
	| FollowUserActionType
	| UnFollowUserActionType
	| AddUsersActionType
	| DragUsersActionType
	| SetCurrentPageActionType
	| SetTotalUsersCountActionType
	| SetRequestStatusActionType
	| SetIsFollowingInProgressActionType
	| SetAppErrorActionType 

// let initialUsersState: UsersPageType = {
// 	users: [
// 		{ id: 1, name: 'Kris', photos: { small: null, large: null }, status: 'I`m looking for a job', followed: false },
// 		{ id: 2, name: 'Vadim', photos: { small: null, large: null }, status: 'I`m studing', followed: true },
// 		{ id: 3, name: 'Vladimir', photos: { small: null, large: null }, status: 'I do not interested in a new job', followed: false },
// 		{ id: 4, name: 'Rita', photos: { small: null, large: null }, status: 'I`m just working and have business', followed: false },
// 	],
// }

const initialUsersState: UsersPageType = {
	users: [],
	pageSize: 30,
	currentPage: 1,
	totalUsersCount: 0,
	portionSize: 10,
	followingInProgress: []
}

export const usersReducer = (state: UsersPageType = initialUsersState, action: UsersActionsType) => {

	switch (action.type) {
		case 'FOLLOW-USER':
			return {
				...state,
				users: updateUserFollowStatus<User, 'id'>(state.users, action.userId, 'id', {followed: true})
			}
		case 'UNFOLLOW-USER':
			return {
				...state,
				users: updateUserFollowStatus<User, 'id'>(state.users, action.userId, 'id', {followed: false})
			}
		case 'ADD-USERS':
			return {
				...state,
				users: action.users
			};
		case 'DRAG-USER':
			return {
				...state,
				users: action.users
			}
		case 'SET-CURRENT-PAGE':
			return {
				...state,
				currentPage: action.currentPage
			}
		case 'SET-TOTAL-USERS-COUNT':
			return {
				...state,
				totalUsersCount: action.count
			}
		case 'TOGGLE-IS-FOLLOWING-PROGRESS':
			return {
				...state,
				followingInProgress: action.isLoading
					? [...state.followingInProgress, action.userId]
					: [...state.followingInProgress.filter((id) => id != action.userId)]
			}
		default:
			return state;
	}
}

//thunks
export const requestUsers = (currentPage: number, pageSize: number) => async (dispatch: Dispatch<UsersActionsType>) => {
	dispatch(setRequestStatusAction('loading'));
	dispatch(setCurrentPageAction(currentPage));
	try {
		const data = await UsersApi.getUsers(currentPage, pageSize);
		dispatch(setRequestStatusAction('succeeded'));
		dispatch(addUsersAction(data.items));
		dispatch(setTotalUsersCountAction(data.totalCount));
	} catch (error) {
		handleServerNetworkError(error as Error, dispatch);
	}
}

export const toggleFollowUnfollowUser = async(
	dispatch: Dispatch<UsersActionsType>, 
	userId: number, 
	apiMethod: (userId: number) => Promise<ApiResponseType<{}>>,
	action: (userId: number) => UsersActionsType
	) => {
	dispatch(setIsFollowingInProgressAction(userId, true));
	try {
		const response = await apiMethod(userId);
		if (response.resultCode === STATUS_CODE.SUCCESS) {
			dispatch(action(userId));
		}
	} catch (error) {
		handleServerNetworkError(error as Error, dispatch);
	}
	finally {
		dispatch(setIsFollowingInProgressAction(userId, false));
	}
}

export const follow = (userId: number) => async (dispatch: Dispatch<UsersActionsType>) => {
	const apiMethod = UsersApi.followToUser.bind(UsersApi);
	toggleFollowUnfollowUser(dispatch, userId, apiMethod, followAction);
}

export const unFollow = (userId: number) => async (dispatch: Dispatch<UsersActionsType>) => {
	const apiMethod = UsersApi.unFollowFromUser.bind(UsersApi);
	toggleFollowUnfollowUser(dispatch, userId, apiMethod, unFollowAction);
}