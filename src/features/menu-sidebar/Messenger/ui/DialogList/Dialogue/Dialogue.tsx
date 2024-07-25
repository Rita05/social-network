import React, { useParams } from "react-router";
import { ChangeEvent, KeyboardEvent, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

//components
import { DialogueHeader } from "./DialogueHeader/DialogueHeader";
import { MessageSender } from "./DialogueMessageSender/MessageSender";
import { Message } from "./DialogueMessage/Message";
import { FriendMessage } from "./DialogueFriendMessage/FriendMessage";

//models
import { getAuthUserId } from "../../../../../login/model/auth-selectors";
import { getMessages, stopReceiveMessages } from "../../../model/dialogs-reducer";

//styles
import { DialogueContainer, MessagesContainer, MessagesGroup } from "./Dialogue.styled";

//types
import { DialogsPropsType } from "../../../../../../common/types/dialogue";
import { DialogueContainerPropsType } from "./DialogueContainer";
import { ChatMessage } from "../../../../../../common/types/messages";

export const Dialogue = (props: DialogueContainerPropsType) => {

	const {
		dialogsPage: { dialogs },
		sendMessage,
	} = props;

	const id = useSelector(getAuthUserId);
	const params = useParams();
	const currentDialogue = dialogs.find((user: DialogsPropsType) => user.id === Number(params.id));

	const [messages, setMessages] = useState<ChatMessage[]>([]);
	console.log('messages: ', messages);
	const [readyStatus, setReadyStatus] = useState<'pending' | 'ready'>('pending');
	const [wsChanel, setWebSocket] = useState<WebSocket | null>(null);

	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getMessages());
		return () => {
			dispatch(stopReceiveMessages());
		}
	}, [])

	// useEffect(() => {
	// 	let ws: WebSocket;

	// 	const handleCloseConnection = () => {
	// 		setTimeout(createWsChanel, 3000);
	// 	}

	// 	const createWsChanel = () => {
	// 		//если было старое соединение перед созданием нового - к примеру после разрыва соединения через 3 секунды
	// 		ws?.removeEventListener('close', handleCloseConnection);
	// 		ws?.close();
	// 		ws = new WebSocket('wss://social-network.samuraijs.com/handlers/ChatHandler.ashx');
	// 		ws?.addEventListener('close', handleCloseConnection);
	// 		setWebSocket(ws);
	// 	}


	// 	createWsChanel();

	// 	return () => {
	// 		ws?.removeEventListener('close', handleCloseConnection);
	// 		ws.close();
	// 	}
	// }, [])


	useEffect(() => {
		const handleSendMessage = (event: MessageEvent) => {
			setMessages((prevMessages) => [...prevMessages, ...JSON.parse(event.data)]);
		}
		wsChanel?.addEventListener('message', handleSendMessage);

		//cleanup функция
		return () => {
			wsChanel?.removeEventListener('message', handleSendMessage);
		}
	}, [wsChanel]);

	const renderMessages = () => {
		// if (!currentDialogue) {
		// 	return null
		// }

		return messages?.map((message: ChatMessage) => {
			return (
				<MessagesGroup key={message.userId}>
					{
						message.userId === id ? (
							<Message
								key={message.userId}
								{...message}
							/>
						) : (
							<FriendMessage
								key={message.userId}
								{...message}
							/>
						)
					}
				</MessagesGroup>
			)
		})
	}

	// const handleSendMessage = (newDialogueMessage: string) => {
	// 	sendMessage(newDialogueMessage);
	// }

	const handleSendMessage = (newDialogueMessage: string) => {
		if (!newDialogueMessage) {
			return;
		}
		wsChanel?.send(newDialogueMessage);
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
				wsChanel={wsChanel}
				setReadyStatus={setReadyStatus}
				onSendMessage={handleSendMessage}
				isDisabled={wsChanel === null || readyStatus !== 'ready'}
			/>
		</DialogueContainer >
	)
}

