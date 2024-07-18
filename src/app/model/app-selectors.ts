import { rootStoreType } from "../store";

export const getAppErrors = (state: rootStoreType) => state.app.errors;
