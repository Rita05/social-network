import styled from "styled-components";
import { theme } from "../styles/Theme";

export const ContentContainer = styled.div`
    display: flex;
    flex-direction: column;
    height: auto;
    width: auto;
    min-height: 100vh;
    /* width: 650px; */
    /* width: 550px; */
    /* min-height: calc(100vh - 32px); */
    border-radius: 12px;
    background-color: white;
    list-style: none;
    /* margin-top: 16px; */
    border: 1px solid ${theme.colors.border};
`