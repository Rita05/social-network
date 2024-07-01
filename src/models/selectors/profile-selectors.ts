import { rootStoreType } from "../store";

export const getUserProfile = (state: rootStoreType) => state.profilePage.profile;
export const getUserProfilePhotos = (state: rootStoreType) => state.profilePage.profile.photos;
export const getUserProfileId = (state: rootStoreType) => state.profilePage.profile.userId;