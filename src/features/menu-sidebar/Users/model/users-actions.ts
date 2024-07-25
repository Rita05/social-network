
//types
import { User } from "../../../../common/types/users";

const FOLLOW_USER = 'FOLLOW-USER';
const UNFOLLOW_USER = 'UNFOLLOW-USER';
const ADD_USERS = 'ADD-USERS';
const DRAG_USER = 'DRAG-USER';
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE';
const SET_PORTION_NUMBER = 'SET-PORTION-NUMBER';
const SET_TOTAL_USERS_COUNT = 'SET-TOTAL-USERS-COUNT';
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE-IS-FOLLOWING-PROGRESS';

export type FollowUserActionType = ReturnType<typeof followAction>;
export type UnFollowUserActionType = ReturnType<typeof unFollowAction>;
export type AddUsersActionType = ReturnType<typeof addUsersAction>;
export type DragUsersActionType = ReturnType<typeof dragUserAction>;
export type SetCurrentPageActionType = ReturnType<typeof setCurrentPageAction>;
export type SetTotalUsersCountActionType = ReturnType<typeof setTotalUsersCountAction>;
export type SetIsFollowingInProgressActionType = ReturnType<typeof setIsFollowingInProgressAction>;
export type SetPortionNumberActionType = ReturnType<typeof setPortionNumberAction>;

export const followAction = (userId: number) => ({ type: FOLLOW_USER, userId }) as const;
export const unFollowAction = (userId: number) => ({ type: UNFOLLOW_USER, userId }) as const;
export const addUsersAction = (users: Array<User>) => ({ type: ADD_USERS, users }) as const;
export const dragUserAction = (users: Array<User>) => ({ type: DRAG_USER, users }) as const;
export const setCurrentPageAction = (currentPage: number) => ({ type: SET_CURRENT_PAGE, currentPage }) as const;
export const setPortionNumberAction = (portionNumber: number) => ({ type: SET_PORTION_NUMBER, portionNumber }) as const;
export const setTotalUsersCountAction = (count: number) => ({ type: SET_TOTAL_USERS_COUNT, count }) as const;
export const setIsFollowingInProgressAction = (userId: number, isLoading: boolean) => ({ type: TOGGLE_IS_FOLLOWING_PROGRESS, userId, isLoading }) as const;