import { rootStoreType } from "../store";

export const getUserProfile = (state: rootStoreType) => state.profilePage.profile;