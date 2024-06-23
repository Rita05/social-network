//styles
import { InjectedFormProps, reduxForm } from "redux-form";
import { CheckboxLabel, LoginContainer, LoginFormButton, LoginFormButtonWrapper, LoginFormContent, LoginFormItem, LoginFormTextField, LoginFormTitle, StyledLoginForm } from "./Login.styled";

type LoginFormData = {
	login: string
	password: string
	rememberMe: boolean
}

export const Login = () => {
	const onSubmit = (formData: LoginFormData) => {
		console.log('formData: ', formData);
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
	const { handleSubmit } = props
	return (
		<StyledLoginForm onSubmit={handleSubmit}>
			<LoginFormItem>
				<LoginFormTextField
					name={'Login'}
					placeholder={"Введите имя"}
					component={"input"}
				/>
			</LoginFormItem>
			<LoginFormItem>
				<LoginFormTextField
					name={'Password'}
					placeholder={"Введите пароль"}
					component={"input"}
				/>
			</LoginFormItem>
			<LoginFormItem
				type='checkbox'
			>
				<CheckboxLabel htmlFor="rememberMe">Сохранить вход</CheckboxLabel>
				<LoginFormTextField
					name={'RememberMe'}
					component={"input"}
					type="checkbox"
					onChange={() => { }}
				/>
			</LoginFormItem>
			<LoginFormButtonWrapper>
				<LoginFormButton>Войти</LoginFormButton>
			</LoginFormButtonWrapper>
		</StyledLoginForm>
	)
}


const LoginReduxForm = reduxForm<LoginFormData>({
	form: 'Login'
})(LoginForm)
