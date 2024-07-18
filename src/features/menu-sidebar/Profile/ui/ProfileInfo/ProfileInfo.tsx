import { useSelector } from 'react-redux';
import { MouseEvent } from 'react';

//model
import { getUserProfile } from '../../model/profile-selectors';
import { getRequestStatus } from '../../../../../models/selectors';

//icons
import fullNameImg from '../../../../../assets/icons/full-name.svg';
import aboutImg from '../../../../../assets/icons/about.svg';
import jobImg from '../../../../../assets/icons/job.svg';
import contactsImg from '../../../../../assets/icons/contacts.svg';
import gitHubImg from '../../../../../assets/icons/github.svg';
import facebookImg from '../../../../../assets/icons/facebook.svg';
import vkImg from '../../../../../assets/icons/vk.svg';
import instagramImg from '../../../../../assets/icons/instagram.svg';
import twitterImg from '../../../../../assets/icons/twitter.svg';
import youtubeImg from '../../../../../assets/icons/youtube.svg';
import searchJobImg from '../../../../../assets/icons/search-job.svg';
import editProfileImg from '../../../../../assets/icons/edit-profile.svg';

//components
import ProfileInfoItem from './ProfileInfoItem';
import { Preloader } from '../../../../../elements/ui/preloader/Preloader';
import { ProfileInfoTitle } from '../ProfileInfoTitle/ProfileInfoTitle';

//styles
import { StyledProfileContent, StyledProfileInfoItemIcon, StyledProfileInfoItem, StyledProfileInfoItemTitle, StyledProfileInfoItemContactsContent, StyledProfileInfoItemContactsLink, StyledEditProfileButton, StyledEditProfileImg } from "./ProfileInfo.styled";

type Props = {
	isOwner: boolean
	goToEditMode: (event: MouseEvent<HTMLButtonElement>) => void
}

export const ProfileInfo = (props: Props) => {
	const { isOwner, goToEditMode } = props;
	const profile = useSelector(getUserProfile);
	const {
		aboutMe,
		lookingForAJob,
		lookingForAJobDescription,
		fullName,
		contacts
	} = profile;

	const requestStatus = useSelector(getRequestStatus);

	const infoData = [
		{ icon: fullNameImg, title: 'ФИО', description: fullName },
		{ icon: searchJobImg, title: 'В поиске работы', description: lookingForAJob ? 'да' : 'нет' },
		{ icon: jobImg, title: 'Статус поиска работы', description: lookingForAJobDescription },
		{ icon: aboutImg, title: 'Обо мне', description: aboutMe },
	];

	const contactsData = [
		{ icon: gitHubImg, title: 'GitHub', link: contacts?.github },
		{ icon: facebookImg, title: 'Facebook', link: contacts?.facebook },
		{ icon: vkImg, title: 'VK', link: contacts?.vk },
		{ icon: instagramImg, title: 'Instagram', link: contacts?.instagram },
		{ icon: twitterImg, title: 'Twitter', link: contacts?.twitter },
		{ icon: youtubeImg, title: 'YouTube', link: contacts?.youtube }
	];

	const renderContacts = () => {
		return (
			<StyledProfileInfoItemContactsContent>
				{contactsData
					.filter(contact => contact.link)
					.map((contact, index) => {
						const isLink = /^https?:\/\//.test(contact.link);
						return (
							<ProfileInfoItem
								key={index}
								icon={contact.icon}
								title={contact.title}
								description={
									isLink
										? (
											<StyledProfileInfoItemContactsLink to={contact.link} target='_blank'>
												{contact.link}
											</StyledProfileInfoItemContactsLink>
										) : (
											contact.link
										)
								}
							/>
						)
					})}
			</StyledProfileInfoItemContactsContent>
		)
	}

	return (
		<>
			<StyledProfileContent>
				<ProfileInfoTitle>
					{isOwner &&
						<StyledEditProfileButton onClick={goToEditMode}>
							<StyledEditProfileImg src={editProfileImg} />
						</StyledEditProfileButton>
					}
				</ProfileInfoTitle>
				{requestStatus === 'loading' ? <Preloader /> : (
					<>
						{
							infoData
								.filter(info => info.description)
								.map((info, index) => (
									<ProfileInfoItem
										key={index}
										icon={info.icon}
										title={info.title}
										description={info.description}
									/>
								))
						}
						< StyledProfileInfoItem >
							<StyledProfileInfoItemIcon src={contactsImg} />
							<StyledProfileInfoItemTitle>
								Контакты:
								{renderContacts()}
							</StyledProfileInfoItemTitle>
						</StyledProfileInfoItem>
					</>
				)}
			</StyledProfileContent>
		</ >
	)
}
