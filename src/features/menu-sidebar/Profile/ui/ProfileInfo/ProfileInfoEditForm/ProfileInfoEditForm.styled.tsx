import styled from "styled-components";
import { theme } from "../../../../../../styles/Theme";

//components
import { Input } from "../../../../../../elements/ui/input/Input";
import { Checkbox } from "../../../../../../elements/ui/checkbox/Checkbox";
import { TextArea } from "../../../../../../elements/ui/textarea/TextArea";
import { Button } from "../../../../../../elements/ui/button/Button";

export const ProfileInfoEditFormContainer = styled.form``

export const ProfileInfoEditFormContent = styled.div<{ type?: string }>`
	display: flex;
	flex-direction: column;
	margin-top: 16px;
	align-items: ${props => props.type === 'checkbox' ? 'center' : ''};
	gap: 8px;
`

export const ProfileInfoEditFormFieldWrapper = styled.div<{ type?: string }>`
	display: flex;
	flex-direction: ${props => props.type === 'checkbox' ? 'row' : 'column'};
	gap: 4px;
`

const baseProfileInfoEditFormFieldTitle = `
	font-family: Nunito Sans, sans-serif;
	font-weight: 600;
	font-size: 15px;
`

export const ProfileInfoEditFormFieldLabel = styled.label`
	${baseProfileInfoEditFormFieldTitle};
	color: ${theme.colors.secondaryFont};
`

export const ProfileInfoEditFormSectionTitle = styled.span`
	${baseProfileInfoEditFormFieldTitle};
	opacity: 1;
	font-size: 16px;
	margin-top: 20px;
`

const baseFormFieldStyle = `
	font-family: Montserrat-Alternates, sans-serif;
	height: 16px;
	padding: 7px 12px 9px;
	border: 1px solid ${theme.colors.border};
	border-radius: 6px;
`

export const ProfileInfoEditFormField = styled(Input)`
	${baseFormFieldStyle}
`

export const ProfileInfoEditFormFieldCheckbox = styled(Checkbox)`
	${baseFormFieldStyle}
`
export const ProfileInfoEditFormFieldTextArea = styled(TextArea)`
	& ${baseFormFieldStyle}
`

export const SaveEditFormButton = styled(Button)`
	font-family: Montserrat-Alternates, sans-serif;
  font-weight: 600;
	border: none;
	width: fit-content;
	height: 34px;
	background-color: ${theme.colors.primary};
	color: #fff;
	border: none;
	border-radius: 6px;
	margin-top: 16px;
`

export const ErrorText = styled.span`
	color: red;
`