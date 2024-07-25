import { FormEvent, KeyboardEvent, useEffect, useState } from "react";

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
	wsChanel: WebSocket | null
	onSendMessage: (newDialogueMessage: string) => void
	isDisabled: boolean
	setReadyStatus: (status: "pending" | "ready") => void
}

type MessageSenderFormData = {
	newDialogueMessage: string
}

type AddMessageFormProps = InjectedFormProps<MessageSenderFormData, { isDisabled: boolean }> & { isDisabled: boolean }

export const MessageSender = (props: MessageSenderPropsType) => {
	const { onSendMessage, isDisabled, wsChanel, setReadyStatus } = props;

	useEffect(() => {
		const handleOpenConnection = () => {
			setReadyStatus('ready');
		}
		wsChanel?.addEventListener('open', handleOpenConnection)

		//если в props пришел новый wsChanel, то делаем отписку для старого, размонтирование
		return () => {
			wsChanel?.removeEventListener('open', handleOpenConnection)
		}
	}, [wsChanel])

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
					isDisabled={isDisabled}
				/>
			</MessageSenderContent>
		</MessageSenderContainer>
	)
}

export const AddMessageForm = (props: AddMessageFormProps) => {
	const { handleSubmit, submitFailed, touch, isDisabled } = props;

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
			<SendMessageButton type='submit' disabled={isDisabled}>
				<SendMessageIcon src={sendMessage} />
			</SendMessageButton>
		</MessageSenderForm>
	)
}

const AddMessageFormRedux = reduxForm<MessageSenderFormData, { isDisabled: boolean }>({
	form: 'DialogueAddMessageForm'
})(AddMessageForm)
