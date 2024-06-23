import React, { useParams } from "react-router";
import { ChangeEvent, KeyboardEvent } from "react";

//components
import { Error } from '../../../errors/Error';
import { DialogueHeader } from "./DialogueHeader/DialogueHeader";
import { MessageSender } from "./DialogueMessageSender/MessageSender";
import { Message } from "./DialogueMessage/Message";

//styles
import { DialogueContainer, MessagesContainer, MessagesGroup } from "./Dialogue.styled";

//types
import { DialogsPropsType } from "../../../../types/dialogue";
import { FriendMessage } from "./DialogueFriendMessage/FriendMessage";
import { DialogueContainerPropsType } from "./DialogueContainer";

export const Dialogue = (props: DialogueContainerPropsType) => {

	const {
		dialogsPage: { dialogs, messages, newDialogueMessage },
		sendMessage,
		// changeMessage
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

	// const handleChangeMessage = (event: ChangeEvent<HTMLTextAreaElement>) => {
	// 	changeMessage(event.currentTarget.value);
	// }

	const handleSendMessage = (newDialogueMessage: string) => {
		sendMessage(newDialogueMessage);

	}

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
				// onChangeMessage={handleChangeMessage}
				onSendMessage={handleSendMessage}
			/>
		</DialogueContainer >
	)
}

