

//icons
import defaultAvatar from '../../../../../../../assets/icons/default-avatar.svg';

//styles
import { FriendMessageAvatar, FriendMessageBlock, FriendMessageContainer, FriendMessageContent, FriendMessageText, FriendName } from "./FriendMessage.styled";

//types
import { ChatMessage } from "../../../../../../../common/types/messages";

export const FriendMessage = (props: ChatMessage) => {
	const {
		userName,
		message,
		photo
	} = props;
	return (
		<FriendMessageContainer>
			<FriendMessageContent>
				<FriendMessageAvatar
					src={`${photo || defaultAvatar}`}
				/>
				<FriendMessageBlock>
					<FriendName>
						{userName}
					</FriendName>
					<FriendMessageText>
						{message}
					</FriendMessageText>
				</FriendMessageBlock>
			</FriendMessageContent>
		</FriendMessageContainer >
	)
}