import { useNavigate } from "react-router";

//icons
import leftArrow from '../../../../../../../assets/icons/arrow-left.svg';

//styles
import { DialogueHeaderSection, GoBackButton, GoBackIcon, PhotoWrapper, SenderMessageInfo, SenderName, SenderPhoto } from "./DialogueHeader.styled";

//types
import { DialogsPropsType } from "../../../../../../../common/types/dialogue";


type DialogueHeaderPropsType = {
	currentDialogue: DialogsPropsType | undefined
}

export const DialogueHeader = (props: DialogueHeaderPropsType) => {

	const { currentDialogue } = props;

	let navigate = useNavigate();

	return (
		<DialogueHeaderSection>
			<GoBackButton onClick={() => navigate(-1)}>
				<GoBackIcon src={`${leftArrow}`} />
				Назад
			</GoBackButton>
			<SenderMessageInfo>
				<SenderName>{currentDialogue?.name}</SenderName>
			</SenderMessageInfo>
			<PhotoWrapper>
				<SenderPhoto src={currentDialogue?.avatar} />
			</PhotoWrapper>
			{/* {
        users[Number(params.id)]?.id
            ? `Dialogue ${users[Number(params.iwd)].id} ${users[Number(params.id)].name}`
            : <Error />
    } */}
		</DialogueHeaderSection >
	)
}