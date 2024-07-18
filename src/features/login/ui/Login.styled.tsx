import styled, { css } from "styled-components";
import { theme } from "../../../styles/Theme";

//components
import { Button } from "../../../elements/ui/button/Button";

//styles
import { FormControlError } from "../../../common/components/FormsControls/FormControl.styled";

export const LoginContainer = styled.div`
	display: grid;
	align-items: center;
	justify-self: center;
	width: 320px;
	min-height: 320px;
	height: fit-content;
	padding: 20px;
	border-radius: 4px;
	background-color: #fff;
	box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
`
export const LoginFormContent = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	height: 100%;
`

export const StyledLoginForm = styled.form`
	width: 100%;
	display: flex;
	flex-direction: column;
	box-sizing: border-box;
`;

export const LoginFormIcon = styled.img`
	width: 75px;
	height: 75px;
	object-fit: cover;
`

export const LoginFormTitle = styled.h1`
	font-family: ComicRelief-Bold, sans-serif;
	margin-top: 16px;
	margin-bottom: 20px;
`

export const LoginFormTextField = css<{ type?: string }>`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	width: ${props => (props.type === 'checkbox' ? '15px' : '100%')};
	height: ${props => (props.type === 'checkbox' ? '15px' : '')};
	cursor: ${props => (props.type === 'checkbox' ? 'pointer' : '')};
	font-family: Montserrat-Medium, sans-serif;
	font-size: 15px;
	border: none;

	${FormControlError} {
		font-family: OpenSans, sans-serif;
		font-size: 13px;
	}
`

export const LoginFormItem = styled.div<{ type?: string, hasError?: boolean, name?: string }>`
	& input {
		height: ${props => props.hasError ? '30px' : ''};
		padding: ${props => props.hasError ? '0' : '7px 0 9px 0'};
		border: ${props => props.name === 'captcha' ? '1px solid #dce1e6' : ''} !important;
		${props => (!props.name || props.name !== 'captcha') && `border-bottom: 1px solid #dce1e6;`}
	}
	margin-bottom: ${props => props.hasError ? '18px' : '16px'};
	display: flex;
	flex-direction: ${props => props?.type === 'checkbox' ? 'row' : 'column'};
	gap: ${props => props?.type === 'checkbox' ? '5px' : ''};
	&:last-child: {
		margin-bottom: none;
	}
`;

export const LoginFormInputControl = css`
	flex-direction: column;
	align-items: flex-start;
`;


export const CheckboxLabel = styled.label`
	font-family: Montserrat-Alternates, sans-serif;
	font-size: 15px;
	white-space: nowrap;
`
export const LoginFormButtonWrapper = styled.div`
	display: flex;
	justify-content: center;
`

export const LoginFormButton = styled(Button)`
	font-family: Montserrat-Alternates, sans-serif;
	font-weight: 600;
	display: flex;
	justify-content: center;
	border: none;
	padding: 5px 10px;
	border-radius: 4px;
	background-color: ${theme.colors.primary};
`
export const LoginFormCommonError = styled.div`
	font-family: OpenSans, sans-serif;
	font-size: 14px;
	color: red;
	margin-bottom: 10px;
`

export const CaptchaImage = styled.img`
	object-fit: cover;
	width: fit-content;
	height: 80px;
`