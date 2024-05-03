import styled from "styled-components";

//styles
import { ContentContainer } from "../../../../components/Container.styled";

//components
import { Button } from "../../../../elements/ui/button/Button";

export const StyledProfileInfo = styled(ContentContainer)`
	width: auto;
	height: auto;
	min-height: fit-content;
	padding: 20px;
`
export const StyledEditProfileData = styled.div`
	display: flex;
	gap: 4px;
`

export const StyledEditProfileTitle = styled.span`
	font-size: 16px;
	font-weight: 500;
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