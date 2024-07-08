
import styled from "styled-components";

//components
import { Select } from "../../../../../elements/ui/select/Select";

//styles
import { StyledOptions, StyledText } from "../../../../../elements/ui/select/Select.styled";
import { theme } from "../../../../../styles/Theme";
import { ContentContainer } from "../../../../../common/components/Container.styled";

export const UsersContainer = styled(ContentContainer)`
	min-height: fit-content;
	margin-bottom: 16px;
	padding: 20px;
`

export const UsersSubscriptionSelect = styled(Select)`
		width: 150px;
		height: 16px;
		font-size: 13px;
		padding: 7px 12px 9px;
		margin-bottom: 8px;
		border: 1px solid ${theme.colors.border};
		border-radius: 6px;
  
    ${StyledText} {
			font-size: 14px;
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

export const UsersContent = styled.div``

