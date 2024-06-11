import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-rows: 48px 1fr;
  min-height: 100vh;
  row-gap: 16px;
  margin: 0 auto;
  background-color: #edeef0;
`
export const MainContent = styled.div`
  display: grid;
  grid-template-columns: minmax(264px, 2fr) 10fr;
  column-gap: 6px;
  max-width: 1076px;
	margin: 0 auto;
`


