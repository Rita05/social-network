import { ChangeEvent, KeyboardEvent } from "react"

//styles
import { AddMessageTextArea, MessageSenderContainer, MessageSenderContent, SendMessageButton, SendMessageIcon } from "./MessageSender.styled";

//icons
import sendMessage from '../../../../../assets/icons/send-message.svg';

type MessageSenderPropsType = {
	onChangeMessage: (e: ChangeEvent<HTMLTextAreaElement>) => void
	onSendMessage: () => void
	newDialogueMessage: string
	onKeyDown: (e: KeyboardEvent<HTMLTextAreaElement>) => void
}

export const MessageSender = (props: MessageSenderPropsType) => {
	const { onChangeMessage, onSendMessage, onKeyDown, newDialogueMessage } = props;
	return (
		<MessageSenderContainer>
			<MessageSenderContent>
				<AddMessageTextArea
					value={newDialogueMessage}
					name={'add-message'}
					placeholder={"Напишите сообщение"}
					onChange={onChangeMessage}
					onKeyDown={onKeyDown}
				/>
				<SendMessageButton onClick={onSendMessage}>
					<SendMessageIcon src={sendMessage} />
				</SendMessageButton>
			</MessageSenderContent>
		</MessageSenderContainer>
	)
}
