
import { styled } from "styled-components";

//styles
import { ContentContainer } from "../../../../components/Container.styled";

export const DialogueContainer = styled(ContentContainer)`
	align-items: center; 
	list-style: none;
	justify-content: space-between;
	min-height: auto;
	margin-bottom: 16px;
`
export const MessagesContainer = styled.div`
	width: 100%;
	height: 100%;
	max-height: 75vh;
    overflow-y: auto;
	display: flex;
	flex-direction: column;
`

export const MessagesGroup = styled.div`
	display: flex;
	flex-direction: column;
`