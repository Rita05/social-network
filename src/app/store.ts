import { AnyAction, applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunk, { ThunkDispatch } from "redux-thunk";
import { useDispatch } from "react-redux";
import { reducer as formReducer } from 'redux-form';

//reducers
import { dialogsReducer } from "../features/menu-sidebar/Messenger/model/dialogs-reducer";
import { profileReducer } from "../features/menu-sidebar/Profile/model/profile-reducer";
import { sidebarReducer } from "../models/reducers/sidebar-reducer";
import { usersReducer } from "../features/menu-sidebar/Users/model/users-reducer";
import { authReducer } from "../features/login/model/auth-reducer";
import { requestStatusReducer } from "../models/reducers/requestStatus-reducer";
import { appReducer } from "./model/app-reducer";

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
	auth: authReducer,
	loader: requestStatusReducer,
	form: formReducer,
	app: appReducer
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));

export type rootStoreType = ReturnType<typeof rootReducer>;

export type AppDispatchType = ThunkDispatch<rootStoreType, unknown, AnyAction>;

export const useAppDispatch = () => useDispatch<AppDispatchType>();

//@ts-ignore
window.store = store;
