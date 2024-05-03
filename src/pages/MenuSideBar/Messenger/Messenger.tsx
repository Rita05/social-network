import { StoreContext } from "../../../models/StoreContent"

//components
import { DialogList } from "./DialogList/DialogList"

//styles
import { StyledContent } from "./Messenger.styled"

//types
import { DialogsPropsType } from "../../../types/dialogue"

type MessengerPropsType = {
	dialogs: Array<DialogsPropsType>
}

export const Messenger = () => {
	// const { dialogs } = props;
	return (
		<StoreContext.Consumer>
			{
				(store) => {
					let state = store.getState();
					return (
						<StyledContent>
							<DialogList dialogs={state.dialogsPage.dialogs} />
						</StyledContent>
					)

				}
			}

		</StoreContext.Consumer>
	)
}

