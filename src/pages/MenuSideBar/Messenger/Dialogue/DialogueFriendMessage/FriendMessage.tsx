

//styles
import { FriendMessageAvatar, FriendMessageBlock, FriendMessageContainer, FriendMessageContent, FriendMessageText, FriendName } from "./FriendMessage.styled";

type FriendMessagePropsType = {
	userName: string
	message: string
	photo: string
}

export const FriendMessage = (props: FriendMessagePropsType) => {
	const {
		userName,
		message,
		photo
	} = props;
	return (
		<FriendMessageContainer>
			<FriendMessageContent>
				<FriendMessageAvatar
					src={`${''}`}
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