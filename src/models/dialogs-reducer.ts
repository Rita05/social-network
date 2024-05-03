
//store
import { DialogsPageType } from "./old-store";


//icons
import avatar from '../assets/icons/ avatar.png';

//types
import { СhangeDialogueMessageActionType, SendMessageActionType } from "./dialogs-actions";

export type DialogsActionsType = СhangeDialogueMessageActionType | SendMessageActionType;


let initialDialogsState = {
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
}

export const dialogsReducer = (state: DialogsPageType = initialDialogsState, action: DialogsActionsType) => {

	switch (action.type) {
		case 'CHANGE_DIALOGUE_MESSAGE':
			state.newDialogueMessage = action.newDialogueMessage;
			return state;
		case 'SEND_MESSAGE':
			const newMessage = { id: 6, message: state.newDialogueMessage, time: `${new Date()}` };
			state.messages.push(newMessage);
			state.newDialogueMessage = '';
			return state;
		default:
			return state;
	}
}


