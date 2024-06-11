import { Link } from "react-router-dom";
import { format, isThisYear, isToday } from 'date-fns';
import { ru } from 'date-fns/locale';

//styles
import { StyledMessagesListItemLink, Photo, StyledMessagesListItem, StyledMessageText, StyledSenderMessage, StyledMessage, StyledPhotoWrapper, StyledSendMessageTime, StyledMessageInfo } from "./DialogListItem.styled";

//types
import { DialogMessagesType, DialogsPropsType } from "../../../../types/dialogue";


type DialogPropsType = {
	user: DialogsPropsType
}

const formatDateMessage = (date: string) => {
	const dateFormat = new Date(date);
	const formatString = isToday(dateFormat) ? 'HH:mm' : isThisYear(dateFormat) ? 'd MMM' : 'd MMM yyyy';

	return format(dateFormat, formatString, { locale: ru }).replace(/\./g, '');
};

const getLastMessage = (messages: Array<DialogMessagesType>) => {
	const lastMessage = messages[messages.length - 1];
	return lastMessage ? { time: formatDateMessage(lastMessage.time), message: lastMessage.message } : { time: '', message: '' };
};

export const MessagesListItem = (props: DialogPropsType) => {

	const { user: { id, name, avatar, messages } } = props;
	return (
		<>
			<StyledMessagesListItemLink to={`/messages/${id}`}>
				<StyledMessagesListItem>
					<StyledPhotoWrapper>
						<Photo src={`${avatar}`} />
					</StyledPhotoWrapper>
					<StyledMessageText>
						<StyledMessageInfo>
							<StyledSenderMessage>{name}</StyledSenderMessage>
							<StyledSendMessageTime>{getLastMessage(messages).time}</StyledSendMessageTime>
						</StyledMessageInfo>
						<StyledMessage>{getLastMessage(messages).message}</StyledMessage>
					</StyledMessageText>
				</StyledMessagesListItem>
			</StyledMessagesListItemLink>
		</>
	)
};