import styled, { css } from "styled-components";

//components
import { Button } from "../../../../../elements/ui/button/Button";
import { NavLink } from "react-router-dom";

export const StyledProfileContent = styled.div`
	display: flex;
	flex-direction: column;
	margin-top: 16px;
	gap: 12px;
`

export const StyledProfileInfoItem = styled.div`
	display: flex;
	align-items: flex-start;
`
export const StyledProfileInfoItemIcon = styled.img`
	width: 20px;
  height: 20px;
	margin-right: 12px;
`

export const StyledProfileInfoItemTitle = styled.span`
	font-family: Montserrat-Alternates, sans-serif;
	font-size: 14px;
	font-weight: 500;
	color: #626d7a;
`

const sharedStyles = css`
  font-size: 14px;
  color: #000;
  margin-left: 6px;
  word-break: break-word;
`;

export const StyledProfileInfoItemDescription = styled.span`
	font-family: Nunito Sans, sans-serif;
	font-weight: 600;
	${sharedStyles}
`
export const StyledProfileInfoItemContactsContent = styled(StyledProfileContent)`
	display: flex;
	flex-direction: column;
	margin-top: 12px;
	margin-left: 12px;
`

export const StyledProfileInfoItemContactsLink = styled(NavLink)`
	${sharedStyles}
	text-decoration: none;
`

export const StyledEditProfileButton = styled(Button)`
 outline: none;
 border: none;
 padding: 0;
 background-color: transparent;
`

export const StyledEditProfileImg = styled.img`
width: 26px;
height: 26px;
margin-top: -7px;
transform: scaleX(-1);
`
