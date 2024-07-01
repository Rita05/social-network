import styled, { RuleSet } from "styled-components";

export const FormControlContainer = styled.div<{ styles?: RuleSet<object> | string; error: boolean }>`
	display: flex;
	align-items: center;
	${props => props?.error && props.styles};
	& input {
		border-bottom: ${props => props?.error ? '1.5px solid red' : ''}
	}
	& textarea {
		border: ${props => props?.error ? '1.5px solid red' : ''}
	}
`
export const FormControlError = styled.span<{ styles?: RuleSet<object> | string }>`
	${props => props.styles};
	color: red;
`
export const FormControlFieldCommonError = styled.div`
	color: red;
`