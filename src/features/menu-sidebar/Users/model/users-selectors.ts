import { rootStoreType } from "../../../../app/store";

export const getUsers = (state: rootStoreType) => state.usersPage.users;
export const getportionSize = (state: rootStoreType) => state.usersPage.portionSize;
export const getPageSize = (state: rootStoreType) => state.usersPage.pageSize;
export const getTotalUsersCount = (state: rootStoreType) => state.usersPage.totalUsersCount;
export const getCurrentPage = (state: rootStoreType) => state.usersPage.currentPage;
export const gePortionNumber = (state: rootStoreType) => state.usersPage.portionNumber;
export const getFollowingInProgress = (state: rootStoreType) => state.usersPage.followingInProgress;