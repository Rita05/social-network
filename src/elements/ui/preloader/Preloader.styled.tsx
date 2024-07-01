import styled, { css, RuleSet } from "styled-components";

export const PreloaderIcon = styled.img<{ customStyles?: RuleSet<object> | string }>`
	margin: 0 auto;
	width: 100px;
	height: 100px;
    ${(props) => props.customStyles && css`${props.customStyles}`}
`
