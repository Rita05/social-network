
import React from 'react';

//icons
import profileIcon from '../../assets/icons/profile.svg';
import messageIcon from '../../assets/icons/message.svg';
import settingsIcon from '../../assets/icons/settings.svg';
import usersIcon from '../../assets/icons/users.svg';

//style
import { MenuSideBarContainer, MenuSideBarIcon, MenuSideBarItem, MenuSideBarItemLink, MenuSideBarItemWrapper, MenuSideBarLabel } from './MenuSideBar.styled';

type NavLinkActiveType = {
	isActive: boolean;
}

const PATH = {
	PROFILE: '/profile',
	MESSAGES: '/messages',
	SETTINGS: '/settings',
	USERS: '/users'
} as const

export const MenuSideBar = () => {
	return (
		<MenuSideBarContainer>
			<MenuSideBarItem>
				<MenuSideBarItemLink
					to={PATH.PROFILE}
					className={({ isActive }: NavLinkActiveType) =>
						isActive ? `active` : ''
					}
				>
					<MenuSideBarItemWrapper>
						<MenuSideBarIcon src={profileIcon} alt="Profile icon" />
						<MenuSideBarLabel>Профиль</MenuSideBarLabel>
					</MenuSideBarItemWrapper>
				</MenuSideBarItemLink>
			</MenuSideBarItem>
			<MenuSideBarItem>
				<MenuSideBarItemLink
					to={PATH.MESSAGES}
					className={({ isActive }: NavLinkActiveType) =>
						isActive ? `active` : ''
					}
				>
					<MenuSideBarItemWrapper>
						<MenuSideBarIcon src={messageIcon} alt="Message icon" />
						<MenuSideBarLabel>Мессенджер</MenuSideBarLabel>
					</MenuSideBarItemWrapper>
				</MenuSideBarItemLink>
			</MenuSideBarItem>
			<MenuSideBarItem>
				<MenuSideBarItemLink
					to={PATH.USERS}
					className={({ isActive }: NavLinkActiveType) =>
						isActive ? `active` : ''
					}
				>
					<MenuSideBarItemWrapper>
						<MenuSideBarIcon src={usersIcon} alt="Users icon" />
						<MenuSideBarLabel>Пользователи</MenuSideBarLabel>
					</MenuSideBarItemWrapper>
				</MenuSideBarItemLink>
			</MenuSideBarItem>
			<MenuSideBarItem>
				<MenuSideBarItemLink
					to={PATH.SETTINGS}
					className={({ isActive }: NavLinkActiveType) =>
						isActive ? `active` : ''
					}
				>
					<MenuSideBarItemWrapper>
						<MenuSideBarIcon src={settingsIcon} alt="Settings icon" />
						<MenuSideBarLabel>Настройки</MenuSideBarLabel>
					</MenuSideBarItemWrapper>
				</MenuSideBarItemLink>
			</MenuSideBarItem>
		</MenuSideBarContainer>
	)
}