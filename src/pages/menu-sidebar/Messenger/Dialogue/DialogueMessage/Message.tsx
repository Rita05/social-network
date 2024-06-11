
//styles
import { MessageContent, MessageContainer, SenderMessageAvatar, SenderMessageName, MessageBlock, MessageText } from "./Message.styled";


type MessagePropsType = {
	userName: string
	message: string
	photo: string
}

export const Message = (props: MessagePropsType) => {
	const {
		userName,
		message,
		photo
	} = props;
	return (
		<MessageContainer>
			<MessageContent>
				<SenderMessageAvatar
					src={`${photo || ''}`}
				/>
				<MessageBlock>
					<SenderMessageName>
						{userName}
					</SenderMessageName>
					<MessageText>
						{message}
					</MessageText>
				</MessageBlock>
			</MessageContent>
		</MessageContainer >
	)
}

