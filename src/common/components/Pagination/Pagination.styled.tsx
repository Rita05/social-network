import styled from "styled-components";
import { theme } from "../../../styles/Theme";

//components
import { Button } from "../../../elements/ui/button/Button";

export const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  border-radius: 10px;
`;

export const PageNumber = styled(Button) <{ active: boolean }>`
  background-color: ${props => (props.active ? `${theme.colors.primary}` : '#e0e0e0')};
  color: ${props => (props.active ? '#fff' : '#000')};
  border: none;
  border-radius: 12px;
  margin: 0 5px;
  padding: 10px 15px;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s;
  &:hover {
    background-color: ${props => (props.active ? '#4a71d4' : '#d0d0d0')};
  }
`;

export const Ellipsis = styled.span`
  margin: 0 10px;
  font-size: 16px;
`;

export const PaginationButton = styled(Button)`
  display: flex;
  align-items: center;
	background-color: #e0e0e0;
	border: none;
	border-radius: 12px;
	margin: 0 5px;
  padding: 9px 9px;
	cursor: pointer;
	font-size: 16px;
	transition: background-color 0.3s;

	&:hover {
		background-color: #d0d0d0;
	}

	&:disabled {
		background-color: #f0f0f0;
		cursor: not-allowed;
	}
`

export const PaginationDirectionIcon = styled.img`
  display: flex;
  width: 21px;
  height: 21px;
  object-fit: cover;
`
