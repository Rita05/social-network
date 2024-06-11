import { AnyAction, applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunk, { ThunkDispatch } from "redux-thunk";
import { useDispatch } from "react-redux";

//reducers
import { dialogsReducer } from "./reducers/dialogs-reducer";
import { profileReducer } from "./reducers/profile-reducer";
import { sidebarReducer } from "./reducers/sidebar-reducer";
import { usersReducer } from "./reducers/users-reducer";
import { authReducer } from "./reducers/auth-reducer";

//types
declare global {
	interface Window {
		__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
	}
}

const rootReducer = combineReducers({
	profilePage: profileReducer,
	dialogsPage: dialogsReducer,
	sidebarPage: sidebarReducer,
	usersPage: usersReducer,
	auth: authReducer
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));

export type rootStoreType = ReturnType<typeof rootReducer>;

export type AppDispatchType = ThunkDispatch<rootStoreType, unknown, AnyAction>;

export const useAppDispatch = () => useDispatch<AppDispatchType>();

//@ts-ignore
window.store = store;
