import { ComponentType, ReactNode } from "react";
import { Field, Validator, WrappedFieldProps } from "redux-form";
import { RuleSet } from "styled-components";

//styles
import { FormControlContainer, FormControlError, StyledField } from "./FormControl.styled";

type FormControlProps = WrappedFieldProps & {
	children: ReactNode
	styles?: RuleSet<object> | string
};

export const FormControl = ({ input, meta, children, ...props }: FormControlProps) => {
	const { styles } = props;
	const hasError = meta.touched && meta.error;

	return (
		<FormControlContainer styles={styles} error={hasError}>
			{children}
			{hasError && <FormControlError>{meta.error}</FormControlError>}
		</FormControlContainer>
	)
}

type FieldComponentProps = {
	name: string;
	type?: string;
	placeholder?: string;
	component?: ComponentType<WrappedFieldProps>;
	validate?: Validator | Validator[];
	styles?: any
}


export const FieldComponent = (props: FieldComponentProps) => {
	const {
		name,
		type,
		placeholder,
		component,
		validate,
		styles
	} = props;
	return (
		<StyledField
			name={name}
			type={type}
			placeholder={placeholder}
			component={component}
			validate={validate}
			styles={styles}
		/>
	)
}
