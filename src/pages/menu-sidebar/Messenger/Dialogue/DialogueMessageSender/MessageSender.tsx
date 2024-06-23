import { ChangeEvent, KeyboardEvent } from "react"

//styles
import { AddMessageTextArea, MessageSenderContainer, MessageSenderContent, MessageSenderForm, SendMessageButton, SendMessageIcon } from "./MessageSender.styled";

//icons
import sendMessage from '../../../../../assets/icons/send-message.svg';
import { ConfigProps, InjectedFormProps, reduxForm, reset } from "redux-form";
import { useAppDispatch } from "../../../../../models/store";

type MessageSenderPropsType = {
	// onChangeMessage: (e: ChangeEvent<HTMLTextAreaElement>) => void
	onSendMessage: (newDialogueMessage: string) => void
}

type MessageSenderFormData = {
	newDialogueMessage: string
}

export const MessageSender = (props: MessageSenderPropsType) => {
	const { onSendMessage } = props;

	const dispatch = useAppDispatch();

	const handleSendMessage = (values: MessageSenderFormData) => {
		onSendMessage(values.newDialogueMessage);
		dispatch(reset('DialogueAddMessageForm'));
	}

	return (
		<MessageSenderContainer>
			<MessageSenderContent>
				<AddMessageFormRedux
					onSubmit={handleSendMessage}
				/>
			</MessageSenderContent>
		</MessageSenderContainer>
	)
}


export const AddMessageForm = (props: InjectedFormProps<MessageSenderFormData>) => {
	const { handleSubmit } = props;

	const handleKeyDown = (e: KeyboardEvent<HTMLTextAreaElement>) => {
		console.log('e: ', e);
		const isEnterPressed = e.key === 'Enter' && !e.shiftKey && !e.ctrlKey && !e.altKey && !e.metaKey;
		if (isEnterPressed) {
			e.preventDefault();
			handleSubmit(e);
		}
	};


	return (
		<MessageSenderForm onSubmit={handleSubmit}>
			<AddMessageTextArea
				name='newDialogueMessage'
				component='textarea'
				placeholder={'Напишите сообщение'}
				onKeyDown={handleKeyDown}
			/>
			{/* <AddMessageTextArea
				value={newDialogueMessage}
				name={'add-message'}
				placeholder={"Напишите сообщение"}
				onChange={onChangeMessage}
				onKeyDown={onKeyDown}
			/> */}
			<SendMessageButton type='submit'>
				<SendMessageIcon src={sendMessage} />
			</SendMessageButton>
		</MessageSenderForm>
	)
}

const AddMessageFormRedux = reduxForm<MessageSenderFormData>({
	form: 'DialogueAddMessageForm'
})(AddMessageForm)
