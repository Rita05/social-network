import styled from "styled-components";
import { theme } from "../../styles/Theme";

export const StyledHeader = styled.div`
    background-color: ${theme.colors.primary};
    /* background-color: #6366F1; */
    /* background-color: #A6BCFA; */
`

export const StiledHeaderContent = styled.div`
    display: flex;
    align-items: center;
    max-width: 1076px;
    height: 100%;
    margin: 0 auto;
`

export const LogoImg = styled.img`
    width: 30px;
    height: 30px;
`
