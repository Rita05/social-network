import { formValueSelector, getFormSyncErrors, InjectedFormProps, reduxForm, WrappedFieldProps, getFormMeta, WrappedFieldMetaProps, touch } from "redux-form";
import { connect, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

//utils
import { requiredField } from "../../../common/utils/validators/validators";

//selectors
import { store, useAppDispatch } from "../../../app/store";
import { getIsAuthUser } from "../../../models/selectors";

//thunks
import { loginUser } from "../model/auth-reducer";

//components
import { FieldComponent, FormControl } from "../../../common/components/FormsControls/FormControl";

//styles
import { CheckboxLabel, LoginContainer, LoginFormButton, LoginFormButtonWrapper, LoginFormCommonError, LoginFormContent, LoginFormInputControl, LoginFormItem, LoginFormTextField, LoginFormTitle, StyledLoginForm } from "./Login.styled";
import { useState } from "react";

type LoginFormData = {
	login: string
	password: string
	rememberMe: boolean
}

type LoginFormMeta = {
	login?: {
		touched?: boolean;
		error?: string;
	};
	password?: {
		touched?: boolean;
		error?: string;
	};
	rememberMe?: {
		touched?: boolean;
		error?: string;
	};
};

export const Login = () => {

	const dispatch = useAppDispatch();
	const isAuth = useSelector(getIsAuthUser);

	const onSubmit = (formData: LoginFormData) => {
		if (formData) {
			const { login, password, rememberMe } = formData;
			dispatch(loginUser(login, password, rememberMe));
		}
	}

	if (isAuth) {
		return <Navigate to={"/profile"} />
	}

	return (
		<LoginContainer>
			<LoginFormContent>
				<LoginFormTitle>Вход</LoginFormTitle>
				<LoginReduxForm onSubmit={onSubmit} />
			</LoginFormContent>
		</LoginContainer>
	)
}

export const LoginForm = (props: InjectedFormProps<LoginFormData>) => {
	const { handleSubmit, touch } = props;
	// console.log('props: ', props);
	// console.log('props: ', props);
	// console.log('valid: ', valid);

	const selector = formValueSelector('Login');
	// const formMeta = getFormMeta<LoginFormData>('Login')(store.getState());

	// const loginFieldTouched = formMeta?.login?.touched;
	// const passwordFieldTouched = formMeta?.password?.touched;
	// const formMeta = getFormMeta('Login')(store.getState().form);
	const [loginTouched, setLoginTouched] = useState(false);
	const [passwordTouched, setPasswordTouched] = useState(false);
	const formErrors = getFormSyncErrors('Login')(store.getState());
	// const loginFieldTouched = formMeta && formMeta?.login?.touched;
	// const passwordFieldTouched = formMeta && formMeta?.password?.touched;
	// const touchedFields = touch(...Object.keys(formErrors));
	// console.log('touchedFields: ', touchedFields);
	const formMeta = getFormMeta('Login')(store.getState()) as LoginFormMeta;

	const loginFieldTouched = formMeta?.login?.touched;
	const passwordFieldTouched = formMeta?.password?.touched;

	const loginFieldError = !!(requiredField(selector(store.getState(), 'login'))) && loginTouched;
	// console.log('loginFieldError: ', loginFieldError);
	const passwordFieldError = !!(requiredField(selector(store.getState(), 'password'))) && passwordTouched;
	// console.log('passwordFieldError: ', passwordFieldError);

	const InputField = (props: WrappedFieldProps & { fieldName: string } & { setLocalTouched: (value: boolean) => void }) => {
		const { input, fieldName, setLocalTouched } = props;
		return (
			<FormControl
				styles={LoginFormInputControl}
				{...props}
			>
				<input
					{...input}
					{...props}
					onBlur={(event) => {
						input.onBlur(event);
						touch(fieldName);
						setLocalTouched(true);
					}}
				/>
			</FormControl>
		)
	}

	return (
		<StyledLoginForm onSubmit={handleSubmit}>
			<LoginFormItem hasError={loginFieldError}>
				{
					FieldComponent({
						name: 'login',
						placeholder: "Введите имя",
						component: (fieldProps) =>
							<InputField
								{...fieldProps}
								fieldName="login"
								setLocalTouched={setLoginTouched}
							/>,
						validate: [requiredField],
						styles: LoginFormTextField
					})
				}
			</LoginFormItem>
			<LoginFormItem hasError={passwordFieldError}>
				{FieldComponent({
					name: 'password',
					type: 'password',
					placeholder: "Введите пароль",
					component: (fieldProps) =>
						<InputField
							{...fieldProps}
							fieldName="password"
							setLocalTouched={setPasswordTouched}
						/>,
					validate: [requiredField],
					styles: LoginFormTextField
				})}
			</LoginFormItem>
			<LoginFormItem
				type='checkbox'
			>
				<CheckboxLabel htmlFor="rememberMe">Сохранить вход</CheckboxLabel>
				{FieldComponent({
					name: 'rememberMe',
					type: "checkbox",
					component: (fieldProps) =>
						<InputField
							{...fieldProps}
							fieldName="rememberMe"
							setLocalTouched={() => { }}
						/>,
					// component: InputField,
					styles: LoginFormTextField
				})}
			</LoginFormItem>
			{props.error &&
				<LoginFormCommonError>
					{props.error}
				</LoginFormCommonError>
			}
			<LoginFormButtonWrapper>
				<LoginFormButton>Войти</LoginFormButton>
			</LoginFormButtonWrapper>
		</StyledLoginForm>
	)
}

const LoginReduxForm = reduxForm<LoginFormData>({
	form: 'Login'
})(LoginForm);


