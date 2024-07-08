import styled from "styled-components";
import { theme } from "../../../styles/Theme";

export const FooterSection = styled.footer`
	display: flex;
	justify-content: center;
	height: 10vh;
	padding-top: 15px;
	margin-left: 15px;
  border-top: 1px solid ${theme.colors.border}; 
`

export const FooterAppName = styled.span`
	font-family: OpenSans, sans-serif;
	font-size: 16px;
`
export const FooterHelp = styled.a`
	text-decoration: none;
	color: ${theme.colors.secondaryFont};
	font-family: OpenSans, sans-serif;
	font-size: 14px;
	margin-left: 15px;
`