import styled from "styled-components";

//components
import { Select } from "../../../elements/ui/select/Select";

//styles
import { StyledOptions, StyledText } from "../../../elements/ui/select/Select.styled";
import { theme } from "../../../styles/Theme";


export const UsersListSelect = styled(Select)`

			width: 150px;
			height: 16px;
			font-size: 13px;
			padding: 7px 12px 9px;
			border: 1px solid ${theme.colors.border};
			border-radius: 6px;
  
    ${StyledText} {
			overflow: hidden;
    }

		${StyledOptions} {
			width: max-content;
			min-width: 150px;
			right: 0;
    	left: 0;
			transform: translateY(20%);
			border: 1px solid ${theme.colors.border};
			border-radius: 6px;
    	padding: 7px 12px 9px;
		}
`