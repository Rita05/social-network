import React, { ReactNode } from 'react';
import { StyledProfileInfoItem, StyledProfileInfoItemIcon, StyledProfileInfoItemTitle, StyledProfileInfoItemDescription } from './ProfileInfo.styled';

type ProfileInfoItemPropsType = {
	icon: string,
	title: string,
	description: ReactNode | string
}

export const ProfileInfoItem = (props: ProfileInfoItemPropsType) => {
	const { icon, title, description } = props;

	return (
		<StyledProfileInfoItem>
			<StyledProfileInfoItemIcon src={icon} />
			<StyledProfileInfoItemTitle>
				{title}:
				<StyledProfileInfoItemDescription>
					{description}
				</StyledProfileInfoItemDescription>
			</StyledProfileInfoItemTitle>
		</StyledProfileInfoItem>
	)
}

export default ProfileInfoItem;
