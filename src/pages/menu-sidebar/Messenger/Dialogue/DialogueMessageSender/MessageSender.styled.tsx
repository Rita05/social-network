import styled from "styled-components";
import { theme } from "../../../../../styles/Theme";


//components
import { Button } from "../../../../../elements/ui/button/Button";
import { Field } from "redux-form";

export const MessageSenderContainer = styled.div`
  width: 100%;
	min-height: 50px;
	padding-top: 12px;
	border-top: 1px solid ${theme.colors.border};
`
export const MessageSenderContent = styled.div`
	display: flex;
	margin-left: 2%;
	margin-right: 2%;
`
export const MessageSenderForm = styled.form`
	display: flex;
	width: 100%;
`

export const AddMessageTextArea = styled(Field)`
	font-family: Montserrat-Alternates, sans-serif;
	width: 100%;
	padding: 9px 0 10px 13px;
  height: 15px;
	border: 1px solid ${theme.colors.border};
  border-radius: 6px;
`
export const SendMessageButton = styled(Button)`
	height: 36px;
	border: none;
	margin-left: 7px;
	background-color: transparent;
`
export const SendMessageIcon = styled.img`
	width: 24px;
	height: 24px;
`