import { styled } from "styled-components";


export const StyledSelect = styled.div`
  position: relative;
`

export const StyledText = styled.span`
	display: inline-block;
    width: 100%;
    height: 100%;
	/* font-size: 13px;
	border: 1px solid black;
	display: inline-block;
	min-width: 150px;
	min-height: 20px; */
`
export const DropDownArrow = styled.img`
  position: absolute;
	right: 0.5rem;
	top: 50%;
	transform: translateY(-50%);
	width: 20px;
	height: 20px;
`

export const StyledOptions = styled.div`
	position: absolute;
	padding: 5px;
	border: 1px solid black;
`

export const StyledOption = styled.div<{ isSelected: boolean }> `
	background-color: ${(props) => props.isSelected ? '#aeb7c226' : 'transparent'}; 
	border-radius: ${(props) => props.isSelected ? '6px' : ''}; 
	padding: 5px;
`