import styled from "styled-components";
import { theme } from "../../../../styles/Theme";

//components
import { Button } from "../../../../elements/ui/button/Button";

export const UserCard = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	min-height: 68px;
	height: auto;
	padding: 12px 0;
	border-bottom: 1px solid ${theme.colors.border};

	&:last-of-type {
		border-bottom: none;
	}
`

export const UserDetails = styled.div`
	display: flex;
`

export const UserPhotoWrapper = styled.div`
	display: flex;
	align-self: flex-start;
	margin-right: 15px;
`

export const UserPhoto = styled.img`
	width: 72px;
	height: 72px;
	border-radius: 50%;
	border: 2px solid ${theme.colors.primary};
	padding: 2px;
	object-fit: cover;
`

export const UserInfo = styled.div`
	display: flex;
	flex-direction: column;
	align-self: flex-start;
	padding-top: 5px;
`
export const UserName = styled.span`
	font-size: 13px;
	font-weight: 700;
	margin-bottom: 6px;
`
export const UserStatus = styled.span`
	font-size: 13px;
	font-weight: 500;
	word-break: break-word;
	color: ${theme.colors.secondaryFont};
`
export const SubscriptionButton = styled(Button)`
	width: fit-content;
	height: 28px;
	background-color: ${theme.colors.primary};
	border: none;
	border-radius: 6px;
	margin-top: 11px;
	margin-bottom: 3px;
	color: white;
	font-size: 14px;
	font-weight: 600;

	&:disabled {
		opacity: 0.5;
	}
`
export const DraggableButton = styled(Button)`
	display: flex;
	align-self: flex-start;
	outline: none;
	border: none;
	cursor: grab;
	background-color: transparent;
`
export const DraggableIcon = styled.img`
	width: 24px;
	height: 24px;
`
