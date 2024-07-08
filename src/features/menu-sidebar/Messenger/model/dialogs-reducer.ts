
//icons
import avatar from '../../../../assets/icons/ avatar.png';

//types
import { SendMessageActionType } from "./dialogs-actions";
import { Message } from "../../../../common/types/messages";
import { DialogsPropsType } from "../../../../common/types/dialogue";

export interface DialogsPageType {
	dialogs: Array<DialogsPropsType>
	messages: Array<Message>
}
export type DialogsActionsType = SendMessageActionType;

const initialDialogsState: DialogsPageType = {
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
}

export const dialogsReducer = (state: DialogsPageType = initialDialogsState, action: DialogsActionsType): DialogsPageType => {

	switch (action.type) {
		case 'SEND_MESSAGE':
			const newMessage = { id: 6, message: action.newDialogueMessage, time: `${new Date()}` };
			return {
				...state,
				messages: [...state.messages, newMessage],
			}
		default:
			return state;
	}
}

