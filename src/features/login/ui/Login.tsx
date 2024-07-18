import { formValueSelector, InjectedFormProps, reduxForm, WrappedFieldProps, getFormMeta, WrappedFieldMetaProps, touch } from "redux-form";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

//icons
import pearlIcon from '../../../assets/icons/pearl.png';

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
import { CaptchaImage, CheckboxLabel, LoginContainer, LoginFormButton, LoginFormButtonWrapper, LoginFormCommonError, LoginFormContent, LoginFormIcon, LoginFormInputControl, LoginFormItem, LoginFormTextField, LoginFormTitle, StyledLoginForm } from "./Login.styled";
import { useState } from "react";
import { getCaptcha } from "../model/auth-selectors";

type LoginFormData = {
	login: string
	password: string
	rememberMe: boolean
	captcha: string
}

type CaptchaProps = {
	captchaUrl: string | null;
}

type LoginFormProps = InjectedFormProps<LoginFormData, CaptchaProps> & CaptchaProps;

export const Login = () => {

	const dispatch = useAppDispatch();
	const isAuth = useSelector(getIsAuthUser);
	const captchaUrl = useSelector(getCaptcha);

	const onSubmit = (formData: LoginFormData) => {
		if (formData) {
			const { login, password, rememberMe, captcha } = formData;
			dispatch(loginUser(login, password, rememberMe, captcha));
		}
	}

	if (isAuth) {
		return <Navigate to={"/profile"} />
	}

	return (
		<LoginContainer>
			<LoginFormContent>
				<LoginFormIcon src={pearlIcon} />
				<LoginFormTitle>Вход</LoginFormTitle>
				<LoginReduxForm onSubmit={onSubmit} captchaUrl={captchaUrl} />
			</LoginFormContent>
		</LoginContainer>
	)
}

export const LoginForm = (props: LoginFormProps) => {
	const { handleSubmit, touch, captchaUrl } = props;

	const selector = formValueSelector('Login');
	const [loginTouched, setLoginTouched] = useState(false);
	const [passwordTouched, setPasswordTouched] = useState(false);
	const [captchaTouched, setCaptchaTouched] = useState(false);

	const loginFieldError = !!(requiredField(selector(store.getState(), 'login'))) && loginTouched;
	const passwordFieldError = !!(requiredField(selector(store.getState(), 'password'))) && passwordTouched;

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
					styles: LoginFormTextField
				})}
			</LoginFormItem>
			{captchaUrl && <LoginFormItem>
				<CaptchaImage src={captchaUrl as string} />
			</LoginFormItem>
			}
			{captchaUrl &&
				<LoginFormItem hasError={captchaTouched} name='captcha'>
					{FieldComponent({
						name: 'captcha',
						component: (fieldProps) =>
							<InputField
								{...fieldProps}
								fieldName="captcha"
								setLocalTouched={setCaptchaTouched}
							/>,
						validate: [requiredField],
						styles: LoginFormTextField
					})}
				</LoginFormItem>
			}
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

const LoginReduxForm = reduxForm<LoginFormData, CaptchaProps>({
	form: 'Login'
})(LoginForm);

