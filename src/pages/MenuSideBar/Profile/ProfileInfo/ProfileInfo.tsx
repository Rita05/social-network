
//icons
import editProfileImg from '../../../../assets/icons/edit-profile.svg';

//styles
import { StyledEditProfileButton, StyledEditProfileData, StyledEditProfileImg, StyledEditProfileTitle, StyledProfileInfo } from "./ProfileInfo.styled"


export const ProfileInfo = () => {
	return (
		<StyledProfileInfo>
			<StyledEditProfileData>
				<StyledEditProfileTitle>
					{'Информация о профиле'}
				</StyledEditProfileTitle>
				<StyledEditProfileButton>
					<StyledEditProfileImg src={editProfileImg} />
				</StyledEditProfileButton>
			</StyledEditProfileData>
		</StyledProfileInfo>
	)
}
