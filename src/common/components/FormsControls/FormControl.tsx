import { ComponentType, ReactNode, KeyboardEvent } from "react";
import { Field, Validator, WrappedFieldProps } from "redux-form";
import { RuleSet } from "styled-components";

//styles
import { FormControlContainer, FormControlError, StyledField } from "./FormControl.styled";

type FormControlProps = WrappedFieldProps & {
	children: ReactNode
	styles?: RuleSet<object> | string
};

export const FormControl = ({ input, meta: { touched, error }, children, ...props }: FormControlProps) => {
	const { styles } = props;
	const hasError = touched && error;

	return (
		<FormControlContainer styles={styles} error={hasError}>
			{children}
			{hasError && <FormControlError>{error}</FormControlError>}
		</FormControlContainer>
	)
}

type FieldComponentProps = {
	name: string;
	type?: string;
	placeholder?: string;
	component?: ComponentType<WrappedFieldProps>;
	onKeyDown?: (e: KeyboardEvent<HTMLElement>) => void;
	validate?: Validator | Validator[];
	styles?: RuleSet<object> | string
}


export const FieldComponent = (props: FieldComponentProps) => {
	const {
		name,
		type,
		placeholder,
		component,
		validate,
		styles,
		onKeyDown
	} = props;

	return (
		<StyledField
			name={name}
			type={type}
			placeholder={placeholder}
			component={component}
			validate={validate}
			onKeyDown={onKeyDown}
			styles={styles}
		/>
	)
}
