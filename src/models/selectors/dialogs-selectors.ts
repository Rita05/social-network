import { rootStoreType } from "../store";

export const getDialogs = (state: rootStoreType) => state.dialogsPage.dialogs;