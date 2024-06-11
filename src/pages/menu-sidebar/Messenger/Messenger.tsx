import { useSelector } from "react-redux";

//selectors
import { getDialogs } from "../../../models/selectors";

//hoc
import { withAuthRedirect } from "../../../hocs/withAuthRedirect";

//components
import { DialogList } from "./DialogList/DialogList";

//styles
import { StyledContent } from "./Messenger.styled";

const Messenger = () => {
	let dialogs = useSelector(getDialogs);

	return (
		<StyledContent>
			<DialogList dialogs={dialogs} />
		</StyledContent>
	)
}
export const MessengerWithAuthRedirect = Messenger;
// export const MessengerWithAuthRedirect = withAuthRedirect(Messenger);

