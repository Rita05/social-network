import { useSelector } from 'react-redux';

//selectors
import { getUserProfile } from '../../../../models/selectors/profile-selectors';
import { getRequestStatus } from '../../../../models/selectors';

//icons
import editProfileImg from '../../../../assets/icons/edit-profile.svg';
import fullNameImg from '../../../../assets/icons/full-name.svg';
import aboutImg from '../../../../assets/icons/about.svg';
import jobImg from '../../../../assets/icons/job.svg';
import contactsImg from '../../../../assets/icons/contacts.svg';
import gitHubImg from '../../../../assets/icons/github.svg';
import facebookImg from '../../../../assets/icons/facebook.svg';
import vkImg from '../../../../assets/icons/vk.svg';
import instagramImg from '../../../../assets/icons/instagram.svg';
import twitterImg from '../../../../assets/icons/twitter.svg';
import youtubeImg from '../../../../assets/icons/youtube.svg';
import searchJobImg from '../../../../assets/icons/search-job.svg';


//components
import ProfileInfoItem from './ProfileInfoItem';
import { Preloader } from '../../../../elements/ui/preloader/Preloader';


//styles
import { StyledEditProfileButton, StyledEditProfile, StyledEditProfileImg, StyledEditProfileTitle, StyledProfileContent, StyledProfileInfo, StyledProfileInfoItemIcon, StyledProfileInfoItem, StyledProfileInfoItemDescription, StyledProfileInfoItemTitle, StyledProfileInfoItemContactsContent, StyledProfileInfoItemContactsLink } from "./ProfileInfo.styled"

type ProfileInfo = {

}

export const ProfileInfo = (props: ProfileInfo) => {

	const profile = useSelector(getUserProfile);
	const {
		userId,
		aboutMe,
		lookingForAJob,
		lookingForAJobDescription,
		fullName,
		contacts
		// contacts: { github, vk, facebook, twitter, website, youtube, mainLink },
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
		<StyledProfileInfo>
			<StyledEditProfile>
				<StyledEditProfileTitle>
					{'Информация о профиле'}
				</StyledEditProfileTitle>
				<StyledEditProfileButton>
					<StyledEditProfileImg src={editProfileImg} />
				</StyledEditProfileButton>
			</StyledEditProfile>
			<StyledProfileContent>
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
		</StyledProfileInfo >
	)
}
