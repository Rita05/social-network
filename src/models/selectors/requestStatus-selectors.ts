import { rootStoreType } from "../../app/store";

export const getRequestStatus = (state: rootStoreType) => state.loader.status;