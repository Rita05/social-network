//components
import { MessagesListItem } from "../DialogListItem/DialogListItem";

//styles
import { MessagesListWrapper } from "./DialogList.styled";

//types
import { DialogsPropsType } from "../../../../types/dialogue";

type DialogListPropsType = {
	dialogs: Array<DialogsPropsType>
}


export const DialogList = (props: DialogListPropsType) => {
	const { dialogs } = props;

	return (
		<MessagesListWrapper>
			{
				dialogs.map((user: DialogsPropsType) => {
					return <MessagesListItem key={user.id} user={user} />
				})
			}
		</MessagesListWrapper >
	)
};

