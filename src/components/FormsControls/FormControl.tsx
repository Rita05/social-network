import { ReactNode } from "react";
import { WrappedFieldProps } from "redux-form";
import { RuleSet } from "styled-components";

//styles
import { FormControlContainer, FormControlError } from "./FormControl.styled";

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
