import React, { useParams } from "react-router";
import { ChangeEvent, KeyboardEvent } from "react";


//components
import { Error } from '../../../Errors/Error';
import { DialogueHeader } from "./DialogueHeader/DialogueHeader";
import { MessageSender } from "./DialogueMessageSender/MessageSender";
import { Message } from "./DialogueMessage/Message";

//actions
import { changeDialogueMessageAction, sendMessageAction } from "../../../../models/dialogs-actions";

//styles
import { DialogueContainer, MessagesContainer, MessagesGroup } from "./Dialogue.styled";

//types
import { DialogsPropsType } from "../../../../types/dialogue";
import { DialogsPageType } from "../../../../models/old-store";
import { FriendMessage } from "./DialogueFriendMessage/FriendMessage";

type DialoguePropsType = {
	dialogsPage: DialogsPageType
	store: any
	dispatch: any
}

export const Dialogue = (props: any) => {
	// const { dialogsPage: { dialogs, messages, newDialogueMessage }, store, dispatch } = props;

	// let state = store.getState().dialogsPage;
	const {
		dialogs,
		messages,
		sendMessage,
		changeMessage,
		newDialogueMessage
	} = props;

	const params = useParams();
	const currentDialogue = dialogs.find((user: DialogsPropsType) => user.id === Number(params.id));

	const renderMessages = () => {
		if (!currentDialogue) {
			return null
		}

		return messages.map((m: any) => {
			return (
				<MessagesGroup key={m.id}>
					{
						m.id % 2 !== 0 ? (
							<Message
								key={m.id}
								userName={'Маргарита Таранова'}
								message={m.message}
								photo={''}
							/>
						) : (
							< FriendMessage
								key={m.id}
								userName={'Дмитрий Таранов'}
								message={m.message}
								photo={''}
							/>
						)
					}
				</MessagesGroup>
			)
		})
	}

	const handleChangeMessage = (event: ChangeEvent<HTMLTextAreaElement>) => {
		// store.dispatch(changeDialogueMessageAction(event.currentTarget.value));
		changeMessage(event.currentTarget.value);
	}

	const handleSendMessage = () => {
		// store.dispatch(sendMessageAction());
		sendMessage();
	}

	const onEnter = (e: KeyboardEvent<HTMLTextAreaElement>) => {
		const isEnterPressed = e.key === 'Enter' && !e.shiftKey && !e.ctrlKey && !e.altKey && !e.metaKey;
		if (isEnterPressed) {
			e.preventDefault();
			handleSendMessage();
		}
	};

	return (
		<DialogueContainer>
			<DialogueHeader currentDialogue={currentDialogue} />
			{/* {
				currentDialogue
					? <span>{`Dialogue ${currentDialogue.id} ${currentDialogue.name}`}</span>
					: <h2>{'No such dialogue found'}</h2>
			} */}
			<MessagesContainer>
				{renderMessages()}
			</MessagesContainer>
			<MessageSender
				newDialogueMessage={newDialogueMessage}
				onChangeMessage={handleChangeMessage}
				onSendMessage={handleSendMessage}
				onKeyDown={onEnter}
			/>
		</DialogueContainer >
	)
}

