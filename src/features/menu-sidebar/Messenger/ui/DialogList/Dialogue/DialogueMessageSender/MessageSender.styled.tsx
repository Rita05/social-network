import styled, { css } from "styled-components";
import { theme } from "../../../../../../../styles/Theme";

//components
import { Button } from "../../../../../../../elements/ui/button/Button";
import { Field } from "redux-form";

//styles
import { FormControlError } from "../../../../../../../common/components/FormsControls/FormControl.styled";

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

export const AddMessageTextAreaFormControl = css`
	flex-direction: column;
	align-items: flex-start;

	/* ${FormControlError} {
		font-family: OpenSans, sans-serif;
		font-size: 13px;
		padding-bottom: 8px;
	} */
`;

export const MessageSenderForm = styled.form<{ error: boolean, hasError: boolean }>`
	width: 100%;
	display: flex;
	gap: ${props => props.hasError ? '15px' : ''};

	& div {
		width: 100%;
	}

	& textarea{
	   border: 1px solid ${theme.colors.border};
	   height: ${props => props.hasError ? '14px' : '15px'};
	}

	& button {
	${props => props.hasError && `
      display: flex;
      flex-direction: column;
      justify-content: center;
      height: 50px;
    `}
	}
`
// export const AddMessageTextArea = styled(Field)`
// 	font-family: Montserrat-Alternates, sans-serif;
// 	width: 100%;
// 	padding: 9px 0 10px 13px;
//   	height: 15px;
// 	border: 1px solid ${theme.colors.border};
//   	border-radius: 6px;
// `

export const AddMessageTextArea = css`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	font-family: Montserrat-Alternates, sans-serif;
	width: 100%;
	padding: 9px 0 10px 13px;
  	/* height: 15px; */
	/* border: 1px solid ${theme.colors.border}; */
  	border-radius: 6px;

	${FormControlError} {
		font-family: OpenSans, sans-serif;
		font-size: 13px;
		padding-bottom: 8px;
	}
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