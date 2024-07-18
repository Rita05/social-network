import { ReactNode } from "react";

//styles
import { StyledEditProfileTitle, StyledEditProfile } from "./ProfileInfoTitle.styled"

type Props = {
	children?: ReactNode
}

export const ProfileInfoTitle = (props: Props) => {
	const { children } = props;
	return (
		<StyledEditProfile >
			<StyledEditProfileTitle>
				{'Информация о профиле'}
			</StyledEditProfileTitle>
			{children}
		</StyledEditProfile>
	)
}