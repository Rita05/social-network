import { AnyAction, Dispatch } from "redux";
import { ThunkDispatch } from "redux-thunk";

//utils
import { handleServerAppError, handleServerNetworkError } from "../../../../common/utils/error-utils";

//api
import { ProfileApi } from "../api";

//actions 
import { AddPostActionType, СhangePostLikesCountActionType, AddUserProfileActionType, addUserProfileAction, setRequestStatusAction, SetRequestStatusActionType, SetUserProfileStatusActionType, setUserProfileStatus, DeleteProfilePostActionType, SetUserProfileAvatarActionType, setUserProfileAvatar } from "../../../../models/actions";

//types
import { PostType } from "../../../../common/types/posts";
import { UserProfileType } from "../../../../common/types/profile";
import { ErrorType, STATUS_CODE } from "../../../../common/api/common-api";
import { rootStoreType } from "../../../../app/store";
import { SetAppErrorActionType } from "../../../../app/model/app-actions";


export interface ProfilePageType {
	posts: Array<PostType>
	profile: UserProfileType
	newPostMessage: string
	status: string
}


export type ProfileActionsType =
	| AddPostActionType
	| СhangePostLikesCountActionType
	| AddUserProfileActionType
	| SetRequestStatusActionType
	| SetUserProfileStatusActionType
	| DeleteProfilePostActionType
	| SetUserProfileAvatarActionType
	| SetAppErrorActionType 


const initialProfileState: ProfilePageType = {
	posts: [
		{ id: 1, message: 'hi, how it`s going?', likesCount: 12 },
		{ id: 2, message: 'what is your name?', likesCount: 11 },
		{ id: 3, message: 'blabla', likesCount: 5 },
		{ id: 4, message: 'dadada', likesCount: 1 },
	],
	profile: {} as UserProfileType,
	newPostMessage: '',
	status: ''
}

export const profileReducer = (state: ProfilePageType = initialProfileState, action: ProfileActionsType) => {

	switch (action.type) {
		case 'ADD-POST':
			let newPost = {
				id: Math.random(),
				message: action.newPostMessage,
				likesCount: 0
			}
			return {
				...state,
				posts: [...state.posts, newPost],
				newPostMessage: ''
			}
		case 'CHANGE-POST-LIKES-COUNT':
			return {
				...state,
				posts: state.posts.map(post =>
					post.id === action.postId
						? { ...post, likesCount: action.liked ? post.likesCount + 1 : post.likesCount - 1 }
						: post
				)
			}
		case 'ADD-USER-PROFILE':
			return {
				...state,
				profile: action.profile
			}
		case 'SET-USER-PROFILE-STATUS':
			return {
				...state,
				status: action.status
			}
		case 'SET-USER-PROFILE-AVATAR': 
			return {
				...state,
				profile: {...state.profile, photos: action.photos}
			}
		case 'DELETE-PROFILE-POST':
			return {
				...state,
				posts: state.posts.filter(post => post.id !== action.postId)
			}
		default:
			return state;
	}
}

//thunks 
export const getUserProfile = (userId: number) => async (dispatch: Dispatch<ProfileActionsType>) => {
	dispatch(setRequestStatusAction('loading'));
	try {
		const data = await ProfileApi.getUserProfile(userId);
		dispatch(setRequestStatusAction('succeeded'));
		dispatch(addUserProfileAction(data));
	} catch (error) {
		handleServerNetworkError(error as Error, dispatch);
	}
}

export const getUserProfileStatus = (userId: number) => async (dispatch: Dispatch<ProfileActionsType>) => {
	dispatch(setRequestStatusAction('loading'));
	try {
		const response = await ProfileApi.getUserProfileStatus(userId);
		dispatch(setRequestStatusAction('succeeded'));
		dispatch(setUserProfileStatus(response));
	} catch (error) {
		handleServerNetworkError(error as Error, dispatch);
	}
}

export const updateUserProfileStatus = (status: string) => async (dispatch: Dispatch<ProfileActionsType>) => {
	dispatch(setRequestStatusAction('loading'));
	try {
		const response = await ProfileApi.updateUserProfileStatus(status);
		if (response.resultCode === STATUS_CODE.SUCCESS) {
			dispatch(setUserProfileStatus(status));
			dispatch(setRequestStatusAction('succeeded'));
		}
	} catch (error) {
		handleServerNetworkError(error as Error, dispatch);
	}
}

export const uploadProfileAvatar = (file: File) => async(dispatch: Dispatch<ProfileActionsType>) => {
	dispatch(setRequestStatusAction('loading'));
	try {
		const response = await ProfileApi.updateUserProfileAvatar(file);
		if (response.resultCode === STATUS_CODE.SUCCESS) {
			dispatch(setUserProfileAvatar(response.data.data.photos));
			dispatch(setRequestStatusAction('succeeded'));
		}
	} catch (error) {
		handleServerNetworkError(error as Error, dispatch);
	}
}

export const updateUserProfile = (profile: Omit<UserProfileType, 'photos'>) => async(dispatch: ThunkDispatch<rootStoreType, unknown, AnyAction> , getState: () => rootStoreType) => {
	const userId= getState().auth.id;
	dispatch(setRequestStatusAction('loading'));
	try {
		const response = await ProfileApi.updateUserProfile(profile);
		if (response.resultCode === STATUS_CODE.SUCCESS) {
			dispatch(setRequestStatusAction('succeeded'));
			if(userId) {
				dispatch(getUserProfile(userId));
			}
		} else {
			handleServerAppError(dispatch, response);
			return Promise.reject(response.messages);
		}
		return response;
	} catch (error) {
		handleServerNetworkError(error as Error, dispatch);
		return Promise.reject(error);
	}
}
