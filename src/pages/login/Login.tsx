import { InjectedFormProps, reduxForm, reset, WrappedFieldProps } from "redux-form";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

//utils
import { requiredField } from "../../utils/validators/validators";

//selectors
import { useAppDispatch } from "../../models/store";
import { getIsAuthUser } from "../../models/selectors";

//thunks
import { loginUser } from "../../models/reducers/auth-reducer";

//components
import { FormControl } from "../../components/FormsControls/FormControl";

//styles
import { CheckboxLabel, LoginContainer, LoginFormButton, LoginFormButtonWrapper, LoginFormCommonError, LoginFormContent, LoginFormInputControl, LoginFormItem, LoginFormTextField, LoginFormTitle, StyledLoginForm } from "./Login.styled";

type LoginFormData = {
	login: string
	password: string
	rememberMe: boolean
}

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
	const { handleSubmit } = props;
	console.log('props: ', props?.error);

	const InputField = (props: WrappedFieldProps) => {
		const { input } = props;
		return (
			<FormControl
				styles={LoginFormInputControl}
				{...props}
			>
				<input
					{...input}
					{...props}
				/>
			</FormControl>
		)
	}

	return (
		<StyledLoginForm onSubmit={handleSubmit}>
			<LoginFormItem>
				<LoginFormTextField
					name={'login'}
					placeholder={"Введите имя"}
					component={InputField}
					validate={[requiredField]}
				/>
			</LoginFormItem>
			<LoginFormItem>
				<LoginFormTextField
					name={'password'}
					type="password"
					placeholder={"Введите пароль"}
					component={InputField}
					validate={[requiredField]}
				/>
			</LoginFormItem>
			<LoginFormItem
				type='checkbox'
			>
				<CheckboxLabel htmlFor="rememberMe">Сохранить вход</CheckboxLabel>
				<LoginFormTextField
					name={'rememberMe'}
					component={InputField}
					type="checkbox"
				// onChange={() => { }}
				/>
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
})(LoginForm)
