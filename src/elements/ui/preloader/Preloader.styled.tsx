import styled, { css } from "styled-components";

export const PreloaderIcon = styled.img<{ customStyles?: string }>`
	margin: 0 auto;
	width: 100px;
	height: 100px;
    ${(props) => props.customStyles && css`${props.customStyles}`}
`
