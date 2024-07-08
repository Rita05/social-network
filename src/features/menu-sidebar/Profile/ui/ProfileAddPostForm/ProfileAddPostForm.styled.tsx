import styled from "styled-components";
import { theme } from "../../../../../styles/Theme";

//components
import { TextArea } from "../../../../../elements/ui/textarea/TextArea";
import { Button } from "../../../../../elements/ui/button/Button";

export const StyledPostForm = styled.form`
	display: flex;
	width: 100%;
`
export const StyledInputAddPostWrapper = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
`

export const StyledInputAddPost = styled(TextArea) <{ error?: string }>`
	font-family: Montserrat-Alternates, sans-serif;
	height: 16px;
	padding: 7px 12px 9px;
	border: ${props => props.error ? '1.5px solid red' : `1px solid ${theme.colors.border}`};
	border-radius: 6px;
`
export const StyledInputAddPostValidation = styled.span`
	font-family: OpenSans, sans-serif;
	font-size: 13px;	
	color: red;
`

export const StyledButtonWrapper = styled.div <{ isDisabled: boolean }>`
	cursor: ${({ isDisabled }) => (isDisabled ? 'not-allowed' : 'pointer')};
`
export const StyledButtonAddPost = styled(Button) <{ isDisabled: boolean }>`
	font-family: Montserrat-Alternates, sans-serif;
	font-weight: 600;
	width: auto;
	height: 34px;
	align-self: flex-end;
	background-color: ${theme.colors.primary};
	color: #fff;
	border: none;
	border-radius: 6px;
	margin-left: 8px;
	pointer-events: ${({ isDisabled }) => (isDisabled ? 'none' : 'auto')};
` 