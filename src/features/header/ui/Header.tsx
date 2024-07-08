//icons
import logoIcon from '../../../assets/icons/pearl.png';
import loginIcon from '../../../assets/icons/login.svg';
import logOutIcon from '../../../assets/icons/logout.svg';
import dropDownIcon from '../../../assets/icons/logout-arrow-down.svg';
import defaultAvatarIcon from '../../../assets/icons/default-avatar.svg';

//selectors
import { useAppDispatch } from '../../../app/store';
import { getUserProfileId, getUserProfilePhotos } from '../../menu-sidebar/Profile/model/profile-selectors';

//thunks
import { logOutUser } from '../../login/model/auth-reducer';

//types
import { HeaderContainerPropsType } from './HeaderContainer';

//styles
import { LoggedInUserAvatar, LoginBlock, LoginButtonText, LoginImageWrapper, LoginImg, LoginLink, LoginText, LogoBlock, LogoImg, LogoText, LogOutBlock, LogOutButton, LogOutSelect, StiledHeaderContent, StyledHeader } from './Header.styled';
import { useNavigate } from 'react-router';
import { useSelector } from 'react-redux';

export const Header = (props: HeaderContainerPropsType) => {
	const { auth: { isAuth, login, id } } = props;

	const dispatch = useAppDispatch();
	const navigate = useNavigate();
	const photos = useSelector(getUserProfilePhotos);
	const userId = useSelector(getUserProfileId);

	const isAuthorizedUserProfile = userId === id;
	const userAvatar = isAuthorizedUserProfile ? (photos?.small || defaultAvatarIcon) : defaultAvatarIcon;

	const handleLogOut = () => {
		dispatch(logOutUser());
		navigate('/login');
	}

	const LogOutElement = () => {
		return (
			<LogOutButton onClick={handleLogOut}>
				{'Выход'}
				<LoginImageWrapper>
					<LoginImg src={logOutIcon} />
				</LoginImageWrapper>
			</LogOutButton>
		)
	}
	const LogoutComponent = LogOutElement();

	const logOutOptions = {
		label: 'Выход',
		value: LogoutComponent
	}

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
							<LogOutBlock>
								<LoggedInUserAvatar src={userAvatar} />
								<LoginText>
									{login}
								</LoginText>
								<LogOutSelect
									value={logOutOptions}
									options={[logOutOptions]}
									dropDownIcon={dropDownIcon}
								>
								</LogOutSelect>
							</LogOutBlock>
						) : (
							<LoginLink to={'/login'}>
								<LoginButtonText>
									{'Вход'}
								</LoginButtonText>
								<LoginImg src={loginIcon} />
							</LoginLink>
						)}
				</LoginBlock>
			</StiledHeaderContent >
		</StyledHeader >
	)
}