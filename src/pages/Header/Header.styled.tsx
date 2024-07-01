import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { theme } from "../../styles/Theme";

//components
import { Select } from "../../elements/ui/select/Select";
import { Button } from "../../elements/ui/button/Button";

//styles
import { DropDownArrow, StyledOption, StyledOptions } from "../../elements/ui/select/Select.styled";

export const StyledHeader = styled.div`
	/* background-color: #6366F1; */
	/* background-color: #A6BCFA; */
`

export const StiledHeaderContent = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	max-width: 1076px;
	height: 100%;
	margin: 0 auto;
	border-radius: 10px;
	background-color: ${theme.colors.primary};
`

export const LogoBlock = styled.div`
	display: flex;
	align-items: center;
	margin-left: 15px;
`

export const LogoImg = styled.img`
	width: 38px;
	height: 38px;
`

export const LogoText = styled.span`
	font-family: Dancing Script, sans-serif;
	font-weight: 700;
	color: #fff;
	font-size: 28px;
	margin-left: 10px;
`

export const LoginLink = styled(NavLink)`
	display: flex;
	align-items: center;
	text-decoration: none;
	color: #fff;
`

export const LoginBlock = styled.div`
	display: flex;
	align-items: center;
	margin-right: 15px;
`

export const LogOutBlock = styled.div`
	display: flex;
	align-items: center;
	gap: 8px;
`

export const LogOutSelect = styled(Select)`
	${StyledOption} {
		background-color: #fff;
		padding: 2px;
	}

	${StyledOptions} {
		top: 30px;
    right: 14px;
		border: 1.5px solid ${theme.colors.border};
		border-radius: 6px;
		background-color: #fff;
		color: #000;
	}

	${DropDownArrow} {
		cursor: pointer;
		width: 25px;
		height: 25px;
	}
`

export const LoggedInUserAvatar = styled.img`
	width: 30px;
	height: 30px;
	object-fit: cover;
	border-radius: 50%;
	background-color: #fff;
	border: 2px solid #fff;
`

export const LoginText = styled.span`
	font-family: Montserrat-Alternates, sans-serif;
	font-weight: 500;
	display: inline-block;
	color: #fff;
	margin-right: 25px;
`

export const LoginButtonText = styled.span`
	font-family: OpenSans, sans-serif;
	color: #fff;
  margin-right: 5px;
`

export const LogOutButton = styled(Button)`
	font-family: OpenSans, sans-serif;
	font-size: 14.5px;
	display: flex;
  align-items: center;
  gap: 8px;
	border: none;
	color: #000;
	background-color: transparent;
`

export const LoginImageWrapper = styled.div`
	display: flex;
	padding-top: 3.5px;
`

export const LoginImg = styled.img`
	width: 18px;
	height: 18px;
`
