import styled from "styled-components";
import { theme } from "../../../../../styles/Theme";

export const MessageContainer = styled.div`
	width: auto;
	position: relative;
	display:flex;
	align-self: flex-end;
	font-family: 'Montserrat', sans-serif;
	margin: 24.5px 40px 47px;
`
export const MessageContent = styled.div`
	display: flex;
	order: 1;
`

export const SenderMessageAvatar = styled.img`
	order: 2;
	width: 36px;
	height: 36px;
	margin-top: 12px;
	margin-left: 12px;
	border-radius: 50%;
	object-fit: cover;
`

export const MessageBlock = styled.div`
	position: relative;
	border-radius: 10px;
	border-bottom-right-radius: 0;
	padding: 7px 13px 8px;
	min-height: 45px;
	background-color: ${theme.colors.primary};
	box-shadow: 0px 1px 2px 0px #1D21261A;

	:after {
		width: 0;
		height: 0;
		bottom: 0px;
		right: -10px;
		border-top: 9px solid transparent;
		border-left: 11px solid ${theme.colors.primary};
		content: "";
		position: absolute;
	}
`

export const SenderMessageName = styled.div`
	font-family: Montserrat-Alternates, sans-serif;
	font-size: 16px;
	font-weight: 600;
	line-height: 21.94px;
	color: #FFFFFF;
`

export const MessageText = styled.span`
	font-family: Nunito Sans, sans-serif;
	font-size: 16px;
	font-weight: 400;
	line-height: 19.5px;
	color: #FFFFFF;
	margin: 0;
	word-break: break-word;
`