import styled from "styled-components";
import { theme } from "../../../../../styles/Theme";

//components
import { Button } from "../../../../../elements/ui/button/Button";

export const DialogueHeaderSection = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 48px;
    border-bottom: 1px solid ${theme.colors.border};
`
export const GoBackButton = styled(Button)`
	display: flex;
	align-items: center;
	width: 148px;
	border: none;
    background-color: transparent;
	color: #818c99;
	cursor: pointer;
`

export const GoBackIcon = styled.img`
   width: 40px;
   height: 40px;
   margin-left: -8px;
`

export const SenderMessageInfo = styled.div`
	display: flex;
	flex-direction: column;
`
export const SenderName = styled.span`
	font-weight: 700;
    font-size: 13px;
`
export const PhotoWrapper = styled.div`
	width: 148px;
	display: flex;
	justify-content: flex-end;
`

export const SenderPhoto = styled.img`
	width: 30px;
	height: 30px;
	border-radius: 50%;
	margin-right: 15px;
	object-fit: cover;
`