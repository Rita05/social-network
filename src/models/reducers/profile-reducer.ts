import { Dispatch } from "redux";
import axios from "axios";

//api
import { ProfileApi } from "../../api/profile";

//actions 
import { AddPostActionType, СhangePostMessageActionType, СhangePostLikesCountActionType, AddUserProfileActionType, addUserProfileAction, setIsLoadingAction } from "../actions";

//types
import { PostType } from "../../types/posts";
import { UserProfileType } from "../../types/profile";
import { ErrorType } from "../../api/common-api";

export interface ProfilePageType {
	posts: Array<PostType>
	profile: UserProfileType
	newPostMessage: string
}

export type ProfileActionsType =
	| AddPostActionType
	| СhangePostMessageActionType
	| СhangePostLikesCountActionType
	| AddUserProfileActionType


const initialProfileState: ProfilePageType = {
	posts: [
		{ id: 1, message: 'hi, how it`s going?', likesCount: 12 },
		{ id: 2, message: 'what is your name?', likesCount: 11 },
		{ id: 3, message: 'blabla', likesCount: 5 },
		{ id: 4, message: 'dadada', likesCount: 1 },
	],
	profile: {} as UserProfileType,
	newPostMessage: ''
}

export const profileReducer = (state: ProfilePageType = initialProfileState, action: ProfileActionsType) => {

	switch (action.type) {
		case 'ADD-POST':
			let newPost = {
				id: Math.random(),
				message: state.newPostMessage,
				likesCount: 0
			}
			return {
				...state,
				posts: [...state.posts, newPost],
				newPostMessage: ''
			}
		case 'CHANGE-POST-MESSAGE':
			return {
				...state,
				newPostMessage: action.postMessage
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
		default:
			return state;
	}
}

//thunks 
export const getUserProfile = (userId: number) => async (dispatch: Dispatch<ProfileActionsType>) => {
	try {
		const data = await ProfileApi.getUserProfile(userId);
		dispatch(addUserProfileAction(data));
	} catch (error) {
		if (axios.isAxiosError(error)) {


		} else {

		}
	}
	// } finally {
	// 	dispatch(setIsLoadingAction(false));
	// }
}
