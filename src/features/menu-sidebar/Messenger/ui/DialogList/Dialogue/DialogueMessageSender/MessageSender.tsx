import { KeyboardEvent } from "react";

//components
import { FormControl } from "../../../../../../../common/components/FormsControls/FormControl";

//icons
import sendMessage from '../../../../../../../assets/icons/send-message.svg';
import { InjectedFormProps, reduxForm, reset, WrappedFieldProps } from "redux-form";
import { useAppDispatch } from "../../../../../../../app/store";

//utils
import { requiredField } from "../../../../../../../common/utils/validators/validators";

//styles
import { AddMessageTextArea, AddMessageTextAreaFormControl, MessageSenderContainer, MessageSenderContent, MessageSenderForm, SendMessageButton, SendMessageIcon } from "./MessageSender.styled";

type MessageSenderPropsType = {
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
	const { handleSubmit, submitFailed } = props;

	const handleKeyDown = (e: KeyboardEvent<HTMLTextAreaElement>) => {
		const isEnterPressed = e.key === 'Enter' && !e.shiftKey && !e.ctrlKey && !e.altKey && !e.metaKey;
		if (isEnterPressed) {
			e.preventDefault();
			handleSubmit(e);
		}
	};

	const TextAreaField = (props: WrappedFieldProps) => {
		const { input } = props;
		return (
			<FormControl
				styles={AddMessageTextAreaFormControl}
				{...props}
			>
				<textarea
					{...input}
					{...props}
				/>
			</FormControl>
		)
	}

	return (
		<MessageSenderForm onSubmit={handleSubmit} error={submitFailed}>
			<AddMessageTextArea
				name='newDialogueMessage'
				component={TextAreaField}
				validate={[requiredField]}
				placeholder={'Напишите сообщение'}
				onKeyDown={handleKeyDown}
			/>
			<SendMessageButton type='submit'>
				<SendMessageIcon src={sendMessage} />
			</SendMessageButton>
		</MessageSenderForm>
	)
}

const AddMessageFormRedux = reduxForm<MessageSenderFormData>({
	form: 'DialogueAddMessageForm'
})(AddMessageForm)
