import { rootStoreType } from "../store";

export const getUsers = (state: rootStoreType) => state.usersPage;
export const getFollowingInProgress = (state: rootStoreType) => state.usersPage.followingInProgress;