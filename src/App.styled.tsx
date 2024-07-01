import styled, { css } from "styled-components";

export const Container = styled.div<{ isAuth: boolean }>`
  display: grid;
  grid-template-rows: 60px 1fr;
  min-height: 100vh;
  row-gap: 16px;
  margin: 0 auto;
  padding-top: 20px;
  background-color: #fbfbfd;
`
export const MainContent = styled.div <{ isAuth: boolean }> `
  display: grid;
  grid-template-columns: ${props => props.isAuth ? 'minmax(264px, 2fr) 10fr' : '1fr'};
  column-gap: 20px;
  max-width: 1076px;
	margin: 0 auto;
`

export const AppPreloader = css`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 30vh;
`


