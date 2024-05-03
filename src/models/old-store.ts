//icons
import avatar from '../assets/icons/ avatar.png';


//reducers
import { ProfileActionsType, profileReducer } from './profile-reducer';
import { DialogsActionsType, dialogsReducer } from './dialogs-reducer';
import { sidebarReducer } from './sidebar-reducer';

//types
import { DialogsPropsType } from "../types/dialogue";
import { Message } from '../types/messages';
import { PostType } from '../types/posts';
import { rootStateType } from './store';


export interface DialogsPageType {
	dialogs: Array<DialogsPropsType>
	messages: Array<Message>
	newDialogueMessage: string
}

export interface ProfilePageType {
	posts: Array<PostType>
	newPostMessage: string
}

export interface StateType {
	dialogsPage: DialogsPageType
	profilePage: ProfilePageType
}

type ActionsTypes = ProfileActionsType | DialogsActionsType;

export let store = {
	_state: {
		profilePage: {
			posts: [
				{ id: 1, message: 'hi, how it`s going?', likesCount: 12 },
				{ id: 2, message: 'what is your name?', likesCount: 11 },
				{ id: 3, message: 'blabla', likesCount: 5 },
				{ id: 4, message: 'dadada', likesCount: 1 },
			],
			newPostMessage: ''
		},
		dialogsPage: {
			dialogs: [
				{ id: 1, name: 'Денис Васильев', avatar: avatar, messages: [{ id: 1, message: 'hello', time: `${new Date()}` }] },
				{ id: 2, name: 'Александр Резников', avatar: avatar, messages: [{ id: 2, message: 'чем занят', time: '2024-04-04' }] },
				{ id: 3, name: 'Дмитрий Катаров', avatar: avatar, messages: [{ id: 3, message: 'как твои дела?', time: '2023-03-29' }] },
				{ id: 4, name: 'Виктория Пересильд', avatar: avatar, messages: [{ id: 4, message: 'чем занимаешься?', time: '2022-05-01' }] }
			],
			messages: [
				{ id: 1, message: 'hello', time: `${new Date()}` },
				{ id: 2, message: 'чем занят', time: '2024-04-04' },
				{ id: 3, message: 'как твои дела?', time: '2023-03-29' },
				{ id: 4, message: 'чем занимаешься?', time: '2022-05-01' }
			],
			newDialogueMessage: ''
		},
		sidebar: {

		}
	},

	getState() {
		return this._state;
	},

	_callSubscriber(state: StateType) {
		console.log('state: ', state);
		console.log('la la la');
	},

	subscribe(observer: (state: rootStateType) => void) {
		this._callSubscriber = observer;
	},

	dispatch(action: ActionsTypes) {

		this._state.profilePage = profileReducer(this._state.profilePage, action as any);
		this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action as any);
		this._state.sidebar = sidebarReducer(this._state.sidebar, action);

		this._callSubscriber(this._state);
		// switch (action.type) {
		// 	case 'ADD-POST':
		// 		let newPost = {
		// 			id: Math.random(),
		// 			message: this._state.profilePage.newPostMessage,
		// 			likesCount: 0
		// 		}
		// 		this._state.profilePage.posts.push(newPost);
		// 		this._state.profilePage.newPostMessage = '';
		// 		break;
		// 	case 'CHANGE-POST-MESSAGE':
		// 		this._state.profilePage.newPostMessage = action.postMessage;
		// 		this._callSubscriber(this._state);
		// 		break;
		// 	case 'CHANGE-POST-LIKES-COUNT':
		// 		this._state.profilePage.posts = this._state.profilePage.posts.map(post =>
		// 			post.id === action.postId
		// 				? { ...post, likesCount: action.liked ? post.likesCount + 1 : post.likesCount - 1 }
		// 				: post
		// 		);
		// 		this._callSubscriber(this._state);
		// 		break;
		// 	case 'CHANGE_DIALOGUE_MESSAGE':
		// 		this._state.dialogsPage.newDialogueMessage = action.dialogueMessage;
		// 		this._callSubscriber(this._state);
		// 		break;
		// 	case 'SEND_MESSAGE':
		// 		const message = this._state.dialogsPage.newDialogueMessage;
		// 		this._state.dialogsPage.newDialogueMessage = '';
		// 		this._state.dialogsPage.messages.push({ id: 5, message, time: `${new Date()}` });
		// 		break;
		// 	default:
		// 		return this._state;
		// }
	}
}

// export let state: StateType = {
// 	profilePage: {
// 		posts: [
// 			{ id: 1, message: 'hi, how it`s going?', likesCount: 12 },
// 			{ id: 2, message: 'what is your name?', likesCount: 11 },
// 			{ id: 3, message: 'blabla', likesCount: 5 },
// 			{ id: 4, message: 'dadada', likesCount: 1 },
// 		],
// 		newPostMessage: ''
// 	},
// 	dialogsPage: {
// 		dialogs: [
// 			{ id: 1, name: 'Денис Васильев', avatar: avatar, messages: [{ id: 1, message: 'hello', time: `${new Date()}` }] },
// 			{ id: 2, name: 'Александр Резников', avatar: avatar, messages: [{ id: 2, message: 'чем занят', time: '2024-04-04' }] },
// 			{ id: 3, name: 'Дмитрий Катаров', avatar: avatar, messages: [{ id: 3, message: 'как твои дела?', time: '2023-03-29' }] },
// 			{ id: 4, name: 'Виктория Пересильд', avatar: avatar, messages: [{ id: 4, message: 'чем занимаешься?', time: '2022-05-01' }] }
// 		]
// 	}
// }

// let renderEntireTree = () => {
// 	console.log('la la la');
// }

// export const addPost = () => {
// 	let newPost = {
// 		id: Math.random(),
// 		message: state.profilePage.newPostMessage,
// 		likesCount: 0
// 	}
// 	state.profilePage.posts.push(newPost);
// 	state.profilePage.newPostMessage = '';
// }

// export const updatePostMessage = (postMessage: string) => {
// 	state.profilePage.newPostMessage = postMessage;
// 	renderEntireTree();
// }

// export const updatePostLikesCount = (postId: number, liked: boolean) => {
// 	state.profilePage.posts = state.profilePage.posts.map(post =>
// 		post.id === postId
// 			? { ...post, likesCount: liked ? post.likesCount + 1 : post.likesCount - 1 }
// 			: post
// 	);
// 	renderEntireTree();
// }

// export const subscribe = (observer: () => void) => {
// 	renderEntireTree = observer;
// }