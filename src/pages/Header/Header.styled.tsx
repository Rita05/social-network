import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { theme } from "../../styles/Theme";

export const StyledHeader = styled.div`
	background-color: ${theme.colors.primary};
	/* background-color: #6366F1; */
	/* background-color: #A6BCFA; */
	background-color: #608af5;
`

export const StiledHeaderContent = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	max-width: 1076px;
	height: 100%;
	margin: 0 auto;
`

export const LogoBlock = styled.div`
	display: flex;
	align-items: center;
`

export const LogoImg = styled.img`
	width: 30px;
	height: 30px;
`

export const LogoText = styled.span`
	font-family: 'Dancing Script', sans-serif;
	font-weight: 700;
	color: #fff;
	font-size: 22px;
	margin-left: 10px;
`

export const LoginInLink = styled(NavLink)`
	display: flex;
	align-items: center;
	text-decoration: none;
	color: #fff;
`

export const LoginBlock = styled.div`
	display: flex;
	align-items: center;
`

export const LoginText = styled.span`
	color: #fff;
`

export const LoginImg = styled.img`
	width: 20px;
	height: 20px;
	margin-left: 6px;
`
