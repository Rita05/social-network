import { combineReducers, createStore } from "redux";

//reducers
import { dialogsReducer } from "./dialogs-reducer";
import { profileReducer } from "./profile-reducer";
import { sidebarReducer } from "./sidebar-reducer";

const rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sidebarPage: sidebarReducer
})

export let store = createStore(rootReducer);

export type rootStoreType = ReturnType<typeof rootReducer>;
// //icons
// import avatar from '../assets/icons/ avatar.png';


// //reducers
// import { ProfileActionsType, profileReducer } from './profile-reducer';
// import { DialogsActionsType, dialogsReducer } from './dialogs-reducer';
// import { sidebarReducer } from './sidebar-reducer';

// //types
// import { DialogsPropsType } from "../types/dialogue";
// import { Message } from '../types/messages';
// import { PostType } from '../types/posts';


// export interface DialogsPageType {
//     dialogs: Array<DialogsPropsType>
//     messages: Array<Message>
//     newDialogueMessage: string
// }

// export interface ProfilePageType {
//     posts: Array<PostType>
//     newPostMessage: string
// }

// export interface StateType {
//     dialogsPage: DialogsPageType
//     profilePage: ProfilePageType
// }

// type ActionsTypes = ProfileActionsType | DialogsActionsType;

// export let store = {
//     _state: {
//         profilePage: {
//             posts: [
//                 { id: 1, message: 'hi, how it`s going?', likesCount: 12 },
//                 { id: 2, message: 'what is your name?', likesCount: 11 },
//                 { id: 3, message: 'blabla', likesCount: 5 },
//                 { id: 4, message: 'dadada', likesCount: 1 },
//             ],
//             newPostMessage: ''
//         },
//         dialogsPage: {
//             dialogs: [
//                 { id: 1, name: 'Денис Васильев', avatar: avatar, messages: [{ id: 1, message: 'hello', time: `${new Date()}` }] },
//                 { id: 2, name: 'Александр Резников', avatar: avatar, messages: [{ id: 2, message: 'чем занят', time: '2024-04-04' }] },
//                 { id: 3, name: 'Дмитрий Катаров', avatar: avatar, messages: [{ id: 3, message: 'как твои дела?', time: '2023-03-29' }] },
//                 { id: 4, name: 'Виктория Пересильд', avatar: avatar, messages: [{ id: 4, message: 'чем занимаешься?', time: '2022-05-01' }] }
//             ],
//             messages: [
//                 { id: 1, message: 'hello', time: `${new Date()}` },
//                 { id: 2, message: 'чем занят', time: '2024-04-04' },
//                 { id: 3, message: 'как твои дела?', time: '2023-03-29' },
//                 { id: 4, message: 'чем занимаешься?', time: '2022-05-01' }
//             ],
//             newDialogueMessage: ''
//         },
//         sidebar: {

//         }
//     },

//     getState() {
//         return this._state;
//     },

//     _callSubscriber(state: StateType) {
//         console.log('state: ', state);
//         console.log('la la la');
//     },

//     subscribe(observer: (state: StateType) => void) {
//         this._callSubscriber = observer;
//     },

//     dispatch(action: any) {

//         this._state.profilePage = profileReducer(this._state.profilePage, action);
//         this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
//         this._state.sidebar = sidebarReducer(this._state.sidebar, action);

//         this._callSubscriber(this._state);
//     }
// }
