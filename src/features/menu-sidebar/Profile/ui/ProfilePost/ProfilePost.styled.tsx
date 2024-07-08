import styled from "styled-components";

//styles
import { ContentContainer } from "../../../../../common/components/Container.styled";
import { Button } from "../../../../../elements/ui/button/Button";
import { theme } from "../../../../../styles/Theme";


export const StyledProfilePost = styled(ContentContainer)`
	width: auto;
	height: auto;
	min-height: fit-content;
	padding: 20px;
	margin-top: 16px;
`

export const StyledProfilePostCreatorInfo = styled.div`
	display: flex;
`

export const StyledPostCreatorImg = styled.img`
	width: 40px;
	height: 40px;
	border-radius: 50%;
	border: 2px solid ${theme.colors.primary};
	padding: 2px;
	object-fit: cover;
`

export const StyledPostCreator = styled.span`
	font-family: Montserrat-Alternates, sans-serif;
	font-size: 14px;
	font-weight: 600;
	margin-left: 12px;
`

export const StyledPostText = styled.span`
	font-family: Nunito, sans-serif;
	font-size: 14px;
	font-weight: 600;
	margin-top: 8px;
	margin-left: 8px;
	word-break: break-word;
`

export const StyledLikes = styled.div`
	display: flex;
	align-items: center;
	width: fit-content;
	padding: 1px 14px;
	border-radius: 20px;
	align-items: center;
	margin-top: 12px;
	background-color: #f0f2f5;
`

export const StyledLikesButton = styled(Button)`z
	outline: none;
	border: none;
	padding: 0;
	background-color: transparent;
`

export const StyledLikesImg = styled.img`
	width: 24px;
	height: 24px;
	margin-top: 3px;
`

export const StyledLikesCounter = styled.span`
	font-size: 13px;
	color: ${theme.colors.secondaryFont};
	margin-left: 6px;
	margin-bottom: 3px;
`