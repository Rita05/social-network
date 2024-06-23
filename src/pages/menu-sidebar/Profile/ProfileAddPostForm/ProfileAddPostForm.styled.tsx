import styled from "styled-components";
import { theme } from "../../../../styles/Theme";


//components
import { TextArea } from "../../../../elements/ui/textarea/TextArea";
import { Button } from "../../../../elements/ui/button/Button";

export const StyledPostForm = styled.div`
	display: flex;
`
export const StyledInputAddPost = styled(TextArea)`
	width: 100%;
	height: 16px;
	padding: 7px 12px 9px;
	border: 1px solid ${theme.colors.border};
	border-radius: 6px;
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