import styled from 'styled-components';
import { NavLink } from "react-router-dom";
import { theme } from '../../styles/Theme';

export const MenuSideBarSection = styled.div`
	display: flex;
	flex-direction: column;
	justify-content:  space-between;
	margin-bottom: 16px;
	border-radius: 12px;
	box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
`

export const MenuSideBarContainer = styled.ul`
	/* background-color: #6366F1; */
	/* background-color: #A6BCFA; */
	display: flex;
	flex-direction: column;
	line-height: 30px;
	font-size: 15px;
	font-weight: 500;
	color: ${theme.colors.font};
	margin: 0;
	padding: 0;
	list-style: none;
	padding: 20px;
`

export const MenuSideBarItem = styled.li`
	margin-bottom: 2px;
`

export const MenuSideBarItemLink = styled(NavLink)`
	text-decoration: none;
	cursor: pointer;
	color:  ${theme.colors.font};
	white-space: nowrap;

	&:hover {
		cursor: pointer;
		display: flex;
		align-items: center;
		background-color: rgba(174, 183, 194, 0.15);
		border-radius: 8px;
	}

	&.active {
		display: flex;
		align-items: center;
		background-color: rgba(174, 183, 194, 0.15);
		border-radius: 8px;
	}
`
export const MenuSideBarItemWrapper = styled.div`
	display: flex;
	align-items: center;
	padding: 3px 6px;
`

export const MenuSideBarIcon = styled.img`
	width: 20px;
	height: 20px;
	margin-right: 10px;
`

export const MenuSideBarLabel = styled.span`
	font-family: Montserrat-Medium, sans-serif;
`

