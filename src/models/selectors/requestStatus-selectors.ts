import { rootStoreType } from "../store";

export const getRequestStatus = (state: rootStoreType) => state.loader.status;