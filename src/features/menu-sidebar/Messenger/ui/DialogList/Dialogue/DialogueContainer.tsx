import React from "react-router";
import { connect } from "react-redux";

//components
import { Dialogue } from "./Dialogue";

//actions
import { sendMessageAction } from "../../../../../../models/actions";

//types
import { rootStoreType } from "../../../../../../app/store";
import { DialogsPageType } from "../../../model/dialogs-reducer";
import { compose, Dispatch } from "redux";
import { ComponentType } from "react";

type DialogueMapStateToPropsType = {
	dialogsPage: DialogsPageType
}

type DialogueMapDispatchToPropsType = {
	sendMessage: (newDialogueMessage: string) => void
}

export type DialogueContainerPropsType = DialogueMapStateToPropsType & DialogueMapDispatchToPropsType;

const mapStateToProps = (state: rootStoreType): DialogueMapStateToPropsType => {
	return {
		dialogsPage: state.dialogsPage,
	}
}

const mapDispatchToProps = (dispatch: Dispatch): DialogueMapDispatchToPropsType => {
	return {
		sendMessage: (newDialogueMessage: string) => (dispatch(sendMessageAction(newDialogueMessage)))
	}
}

export const DialogueContainer = compose<ComponentType>(connect(mapStateToProps, mapDispatchToProps))(Dialogue);
