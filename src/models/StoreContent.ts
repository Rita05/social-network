import React, { createContext, ReactNode } from "react";
import { rootStoreType } from "./store";


export const StoreContext = createContext({} as rootStoreType);


interface ProviderProps {
	store: rootStoreType;
	children: ReactNode;
}

export const Provider = (props: ProviderProps) => {
	const { store, children } = props;
	return (
		<StoreContext.Provider value= { store } >
		{ children }
		< /StoreContext.Provider>
    )
}
