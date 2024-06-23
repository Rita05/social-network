import { Dispatch } from "redux";

//actions
import { addUsersAction, AddUsersActionType, DragUsersActionType, followAction, FollowUserActionType, setCurrentPageAction, SetCurrentPageActionType, setIsFollowingInProgressAction, SetIsFollowingInProgressActionType, setTotalUsersCountAction, SetTotalUsersCountActionType, unFollowAction, UnFollowUserActionType } from "../actions/users-actions";

//api
import { UsersApi } from "../../api/users";
import { STATUS_CODE } from "../../api/common-api";

//types
import { User } from "../../types/users";
import { setRequestStatusAction, SetRequestStatusActionType } from "../actions/requestStatus-actions";

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
				users: state.users.map((user) => user.id === action.userId ? { ...user, followed: true } : user)
			}
		case 'UNFOLLOW-USER':
			return {
				...state,
				users: state.users.map((user) => user.id === action.userId ? { ...user, followed: false } : user)
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
export const getUsers = (currentPage: number, pageSize: number) => async (dispatch: Dispatch<UsersActionsType>) => {
	dispatch(setRequestStatusAction('loading'));
	dispatch(setCurrentPageAction(currentPage));
	// this.props.changeCurrentPage(page);
	try {
		const data = await UsersApi.getUsers(currentPage, pageSize);
		dispatch(setRequestStatusAction('succeeded'));
		dispatch(addUsersAction(data.items));
		dispatch(setTotalUsersCountAction(data.totalCount));
	} catch (error) {
		dispatch(setRequestStatusAction('failed'));
		console.log(error);
	}
}

export const follow = (userId: number) => async (dispatch: Dispatch<UsersActionsType>) => {
	dispatch(setIsFollowingInProgressAction(userId, true));
	try {
		const response = await UsersApi.followToUser(userId);
		if (response.resultCode === STATUS_CODE.SUCCESSS) {
			dispatch(followAction(userId));
		}
		dispatch(setIsFollowingInProgressAction(userId, false));
	} catch (error) {
		console.log(error);
	}
}

export const unFollow = (userId: number) => async (dispatch: Dispatch<UsersActionsType>) => {
	dispatch(setIsFollowingInProgressAction(userId, true));
	try {
		const response = await UsersApi.unFollowFromUser(userId);
		if (response.resultCode === STATUS_CODE.SUCCESSS) {
			dispatch(unFollowAction(userId));
		}
		dispatch(setIsFollowingInProgressAction(userId, false));
	} catch (error) {
		console.log(error);
	}
}