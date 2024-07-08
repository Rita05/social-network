import { UserProfileType } from "../../../../common/types/profile";

const ADD_POST = 'ADD-POST';
const CHANGE_POST_MESSAGE = 'CHANGE-POST-MESSAGE';
const CHANGE_POST_LIKES_COUNT = 'CHANGE-POST-LIKES-COUNT';
const ADD_USER_PROFILE = 'ADD-USER-PROFILE';
const SET_USER_PROFILE_STATUS = 'SET-USER-PROFILE-STATUS';
const DELETE_PROFILE_POST = 'DELETE-PROFILE-POST';

export type AddPostActionType = ReturnType<typeof addPostAction>;

export type СhangePostLikesCountActionType = ReturnType<typeof changePostLikesCountAction>;

export type AddUserProfileActionType = ReturnType<typeof addUserProfileAction>;

export type SetUserProfileStatusActionType = ReturnType<typeof setUserProfileStatus>;

export type DeleteProfilePostActionType = ReturnType<typeof deleteProfilePost>;

export const addPostAction = (newPostMessage: string) => ({ type: ADD_POST, newPostMessage }) as const;

export const changePostLikesCountAction = (postId: number, liked: boolean) =>
    ({ type: CHANGE_POST_LIKES_COUNT, postId, liked }) as const;

export const addUserProfileAction = (profile: UserProfileType) =>
    ({ type: ADD_USER_PROFILE, profile }) as const;

export const setUserProfileStatus = (status: string) => ({ type: SET_USER_PROFILE_STATUS, status }) as const;

export const deleteProfilePost = (postId: number) => ({ type: DELETE_PROFILE_POST, postId }) as const;