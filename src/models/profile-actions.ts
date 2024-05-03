const ADD_POST = 'ADD-POST';
const CHANGE_POST_MESSAGE = 'CHANGE-POST-MESSAGE';
const CHANGE_POST_LIKES_COUNT = 'CHANGE-POST-LIKES-COUNT';


export type AddPostActionType = ReturnType<typeof addPostAction>;

export type СhangePostMessageActionType = ReturnType<typeof changePostMessageAction>;

export type СhangePostLikesCountActionType = ReturnType<typeof changePostLikesCountAction>;

export const addPostAction = () => ({ type: ADD_POST }) as const;

export const changePostMessageAction = (postMessage: string) =>
    ({ type: CHANGE_POST_MESSAGE, postMessage }) as const


export const changePostLikesCountAction = (postId: number, liked: boolean) =>
    ({ type: CHANGE_POST_LIKES_COUNT, postId, liked }) as const;