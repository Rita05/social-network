import { useSelector } from "react-redux";

//selectors
import { getDialogs } from "../../../models/selectors";

//hoc
import { withAuthRedirect } from "../../../common/hocs/withAuthRedirect";

//components
import { DialogList } from "./ui/DialogList/DialogList";

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

