import React from "react-router";

//components
import { Dialogue } from "./Dialogue";

//actions
import { changeDialogueMessageAction, sendMessageAction } from "../../../../models/dialogs-actions";


//types
import { DialogsPageType } from "../../../../models/old-store";
import { StoreContext } from "../../../../models/StoreContent";

type DialoguePropsType = {
	dialogsPage: DialogsPageType
	store: any
	dispatch: any
}

export const DialogueContainer = () => {
	// const { dialogsPage: { dialogs, messages, newDialogueMessage } } = store.getState();
	// const { dispatch } = store;



	return (
		<StoreContext.Consumer>
			{
				(store) => {
					let state = store.getState();
					const handleChangeMessage = (message: string) => {
						store.dispatch(changeDialogueMessageAction(message));
					}

					const handleSendMessage = () => {
						store.dispatch(sendMessageAction());
					}
					return (
						<Dialogue
							changeMessage={handleChangeMessage}
							sendMessage={handleSendMessage}
							dialogs={state.dialogsPage.dialogs}
							messages={state.dialogsPage.messages}
							newDialogueMessage={state.dialogsPage.newDialogueMessage}
						/>
					)
				}
			}

		</StoreContext.Consumer>
	)
}
