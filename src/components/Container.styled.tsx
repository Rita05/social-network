import styled from "styled-components";
import { theme } from "../styles/Theme";

type ContentContainerType = {
	width?: string
	height?: string
	minHeight?: string
	borderRadius?: string
	backgroundColor?: string
}

export const ContentContainer = styled.div<ContentContainerType>`
	display: flex;
	flex-direction: column;
	height: ${(props) => props.height || 'auto'};
	width: ${(props) => props.width || 'auto'};
	min-height: ${(props) => props.minHeight || '100vh'};
	border-radius: ${(props) => props.borderRadius || '12px'};
	background-color: ${(props) => props.backgroundColor || 'white'};
	border: 1px solid ${theme.colors.border};
`
