//icons
import logoIcon from '../../assets/icons/pearl.svg';
import loginIcon from '../../assets/icons/login.svg';

//types
import { HeaderContainerPropsType } from './HeaderContainer';

//styles
import { LoginBlock, LoginImg, LoginInLink, LoginText, LogoBlock, LogoImg, LogoText, StiledHeaderContent, StyledHeader } from './Header.styled';

export const Header = (props: HeaderContainerPropsType) => {
	const { auth: { isAuth, login } } = props

	return (
		<StyledHeader>
			<StiledHeaderContent>
				<LogoBlock>
					<LogoImg src={logoIcon} />
					<LogoText>{'PearlNet'}</LogoText>
				</LogoBlock>
				<LoginBlock>
					{isAuth
						? (
							<LoginText>
								{login}
							</LoginText>
						) : (
							<LoginInLink to={'/login'}>
								<LoginText>
									{'Вход'}
								</LoginText>
								<LoginImg src={loginIcon} />
							</LoginInLink>
						)}
				</LoginBlock>
			</StiledHeaderContent >
		</StyledHeader >
	)
}