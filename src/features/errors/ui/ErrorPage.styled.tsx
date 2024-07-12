import styled from "styled-components"
import { theme } from "../../../styles/Theme"

//components
import { Button } from "../../../elements/ui/button/Button"

export const ErrorSection = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 100%;
	height: 100vh;
	text-align: center;
	padding-bottom: 100px;
	box-sizing: border-box;
`
export const ErrorContent = styled.div`
	align-items: center;
	display: flex;
	flex-direction: column;
	height: 220px;
	justify-content: space-between;
`

export const ErrorImage = styled.img`
	width: 330px;
	height: 182px;
	object-fit: cover;
	margin-bottom: 12px;
`
export const ErrorText = styled.div`
	display: flex;
	flex-direction: column;
	height: 100%;
	justify-content: space-between;
`
export const ErrorTitle = styled.h1`
	font-size: 50px;
	font-weight: 600;
	line-height: 68px;
	margin: 0;
`
export const ErrorMessage = styled.p`
	font-size: 20px;
	font-weight: 600;
	line-height: 27px;
	margin: 0;
	margin-bottom: 16px;
`
export const BackButton = styled(Button)`
	font-family: Montserrat, sans-serif;
	font-size: 1rem;
	font-weight: 600;
	line-height: 1.25rem;
	border: none;
	background-color: ${theme.colors.primary};
	border-radius: 2rem;
	padding: .5rem 1.75rem;
`


