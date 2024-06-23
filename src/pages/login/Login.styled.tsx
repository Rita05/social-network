import styled from "styled-components";
import { theme } from "../../styles/Theme";

//components
import { Button } from "../../elements/ui/button/Button";
import { Field } from "redux-form";

export const LoginContainer = styled.div`
	display: grid;
	align-items: center;
	justify-self: center;
	width: 320px;
	height: 320px;
	padding: 20px;
	border-radius: 4px;
	background-color: #fff;
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
	box-sizing: border-box;
`;

export const LoginFormTitle = styled.h1`
	font-family: ComicRelief-Bold, sans-serif;
	margin-top: 16px;
	margin-bottom: 20px;
`
export const LoginFormItem = styled.div<{ type?: string }>`
	display: ${props => props?.type === 'checkbox' ? 'flex' : ''};
	gap: ${props => props?.type === 'checkbox' ? '5px' : ''};
  margin-bottom: 12px;
	&:last-child: {
		margin-bottom: none;
	}
`;

export const LoginFormTextField = styled(Field) <{ type?: string }>`
	width: ${props => (props.type === 'checkbox' ? '15px' : '100%')};
	height: ${props => (props.type === 'checkbox' ? '15px' : '16px')};
	cursor: ${props => (props.type === 'checkbox' ? 'pointer' : '')};
	font-family: Montserrat-Medium, sans-serif;
	font-size: 15px;
	padding: 7px 0 9px 0;
	border: none;
	border-bottom: 1px solid #dce1e6;
`

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