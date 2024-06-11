import React from "react-router";
import { connect } from "react-redux";

//components
import { Dialogue } from "./Dialogue";

//actions
import { changeDialogueMessageAction, sendMessageAction } from "../../../../models/actions";

//types
import { rootStoreType } from "../../../../models/store";
import { DialogsPageType } from "../../../../models/reducers/dialogs-reducer";
import { compose, Dispatch } from "redux";
import { ComponentType } from "react";

type DialogueMapStateToPropsType = {
	dialogsPage: DialogsPageType
}

type DialogueMapDispatchToPropsType = {
	changeMessage: (message: string) => void
	sendMessage: () => void
}

export type DialogueContainerPropsType = DialogueMapStateToPropsType & DialogueMapDispatchToPropsType;

const mapStateToProps = (state: rootStoreType): DialogueMapStateToPropsType => {
	return {
		dialogsPage: state.dialogsPage,
	}
}

const mapDispatchToProps = (dispatch: Dispatch): DialogueMapDispatchToPropsType => {
	return {
		changeMessage: (message: string) => (dispatch(changeDialogueMessageAction(message))),
		sendMessage: () => (dispatch(sendMessageAction()))
	}
}


export const DialogueContainer = compose<ComponentType>(connect(mapStateToProps, mapDispatchToProps))(Dialogue);
