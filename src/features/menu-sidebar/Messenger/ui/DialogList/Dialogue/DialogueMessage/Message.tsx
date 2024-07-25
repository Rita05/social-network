
//icons
import defaultAvatar from '../../../../../../../assets/icons/default-avatar.svg';

//styles
import { MessageContent, MessageContainer, SenderMessageAvatar, SenderMessageName, MessageBlock, MessageText } from "./Message.styled";

//types
import { ChatMessage } from "../../../../../../../common/types/messages";

export const Message = (props: ChatMessage) => {
	const {
		userName,
		message,
		photo
	} = props;

	return (
		<MessageContainer>
			<MessageContent>
				<SenderMessageAvatar
					src={`${photo || defaultAvatar}`}
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

