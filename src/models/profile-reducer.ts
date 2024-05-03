
//store
import { ProfilePageType } from "./old-store";

//types
import { AddPostActionType, СhangePostMessageActionType, СhangePostLikesCountActionType } from "./profile-actions";

export type ProfileActionsType =
	| AddPostActionType
	| СhangePostMessageActionType
	| СhangePostLikesCountActionType


let initialProfileState = {
	posts: [
		{ id: 1, message: 'hi, how it`s going?', likesCount: 12 },
		{ id: 2, message: 'what is your name?', likesCount: 11 },
		{ id: 3, message: 'blabla', likesCount: 5 },
		{ id: 4, message: 'dadada', likesCount: 1 },
	],
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
			state.posts.push(newPost);
			state.newPostMessage = '';
			return state;
		case 'CHANGE-POST-MESSAGE':
			state.newPostMessage = action.postMessage;
			return state;
		case 'CHANGE-POST-LIKES-COUNT':
			state.posts = state.posts.map(post =>
				post.id === action.postId
					? { ...post, likesCount: action.liked ? post.likesCount + 1 : post.likesCount - 1 }
					: post
			);
			return state;
		default:
			return state;
	}
}

