import styled from "styled-components";

export const Container = styled.div`
    display: grid;
    /* grid-template-areas: 
    "header header"
    "sidebar content"; */
    /* grid-template-areas: 
    "header header"
    "main main"; */
		grid-template-rows: 48px 1fr;
    min-height: 100vh;
    row-gap: 16px;
    /* grid-template-columns: 1fr auto; */
    /* grid-template-rows: 48px 1fr; */
    /* grid-template-columns: 2fr 10fr; */
    /* width: 960px; */
    margin: 0 auto;
    background-color: #edeef0;
`
export const MainContent = styled.div`
  /* grid-area: main; */
  display: grid;
  grid-template-columns: minmax(264px, 2fr) 10fr;
  column-gap: 6px;
  max-width: 1076px;
  /* grid-template-columns: 2fr 10fr; */
  /* align-items: flex-start; */
  /* justify-content: center; */
  /* display: grid; */
	/* grid-template-areas: 
    "header header"
    "sidebar content"; */
	margin: 0 auto;
`


