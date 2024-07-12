import { FormEvent, KeyboardEvent, useState } from "react";

//components
import { FieldComponent, FormControl } from "../../../../../../../common/components/FormsControls/FormControl";

//icons
import sendMessage from '../../../../../../../assets/icons/send-message.svg';
import { formValueSelector, InjectedFormProps, reduxForm, reset, WrappedFieldProps } from "redux-form";
import { store, useAppDispatch } from "../../../../../../../app/store";

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
	const { handleSubmit, submitFailed, touch } = props;

	const [senderTouched, setSenderTouched] = useState(false);
	const selector = formValueSelector('DialogueAddMessageForm');

	const handleKeyDown = (e: KeyboardEvent<HTMLElement>) => {
		const isEnterPressed = e.key === 'Enter' && !e.shiftKey && !e.ctrlKey && !e.altKey && !e.metaKey;
		if (isEnterPressed) {
			e.preventDefault();
			handleSubmit(e);
		}
	};

	const senderFieldError = !!(requiredField(selector(store.getState(), 'newDialogueMessage'))) && senderTouched;

	const handleSubmitForm = (event: FormEvent<HTMLFormElement>) => {
		handleSubmit(event);
		setSenderTouched(false);
	}


	const TextAreaField = (
		props: WrappedFieldProps
			& { fieldName: string }
			& { setLocalTouched: (value: boolean) => void }
	) => {
		const { input, fieldName, setLocalTouched } = props;
		return (
			<FormControl
				styles={AddMessageTextAreaFormControl}
				{...props}
			>
				<textarea
					{...input}
					{...props}
					onBlur={(event) => {
						input.onBlur(event);
						touch(fieldName);
						setLocalTouched(true);
					}}
				/>
			</FormControl>
		)
	}

	return (
		<MessageSenderForm
			onSubmit={(event: FormEvent<HTMLFormElement>) => handleSubmitForm(event)}
			error={submitFailed}
			hasError={senderFieldError}>
			{
				FieldComponent({
					name: 'newDialogueMessage',
					placeholder: "Напишите сообщение",
					component: (fieldProps) =>
						<TextAreaField
							{...fieldProps}
							fieldName="newDialogueMessage"
							setLocalTouched={setSenderTouched}
						/>,

					onKeyDown: (event: KeyboardEvent<HTMLElement>) => handleKeyDown(event),
					validate: [requiredField],
					styles: AddMessageTextArea
				})
			}
			<SendMessageButton type='submit'>
				<SendMessageIcon src={sendMessage} />
			</SendMessageButton>
		</MessageSenderForm>
	)
}

const AddMessageFormRedux = reduxForm<MessageSenderFormData>({
	form: 'DialogueAddMessageForm'
})(AddMessageForm)
