
import React, { useState, ChangeEvent, KeyboardEvent } from "react";

//components
import UploadInput, { UploadInputFile } from "../../../elements/ui/uploadInput/UploadInput";
import { ProfilePost } from "./ProfilePost/ProfilePost";
import { ProfileInfo } from "./ProfileInfo/ProfileInfo";
import { ProfileAddPostForm } from "./ProfileAddPostForm/ProfileAddPostForm";

//actions
import { changePostMessageAction, addPostAction, changePostLikesCountAction } from "../../../models/profile-actions";

//icons
import uploadFileImg from '../../../assets/icons/uploadFile.svg';
import myPhoto from '../../../assets/icons/my-photo.jpg';
import defaultAvatar from '../../../assets/icons/default-avatar.svg';

//style
import { StyledProfileAvatar, StyledProfileContent, StyledProfileContentPosts, StyledProfileHeader, StyledProfileHeaderContent, StyledProfileHeaderCover, StyledProfileSection, StyledUploadFileIcon, StyledUserImg, StyledUserName, StyledProfilePosts } from "./Profile.styled";

//types
import { ProfilePageType } from "../../../models/old-store";


type ProfilePagePropsType = {
	profilePage: ProfilePageType
	// dispatch: any
}


export const Profile = (props: any) => {
	const {
		posts,
		newPostMessage,
		changePostMessage,
		addPost,
		increasePostLikesCount
	} = props;

	const [uploadAvatar, setUploadAvatar] = useState<string | ArrayBuffer | null>(myPhoto);

	const handleChangePostInput = (event: ChangeEvent<HTMLTextAreaElement>) => {
		// dispatch(changePostMessageAction(event.currentTarget.value));
		changePostMessage(event.currentTarget.value);
	}


	const handleAddPost = () => {
		addPost();
		// dispatch(addPostAction());
	}

	const handleIncreasePostLikesCount = (postId: number, liked: boolean) => {
		increasePostLikesCount(postId, liked);
		// dispatch(changePostLikesCountAction(postId, liked));
	}

	const onEnter = (e: KeyboardEvent<HTMLTextAreaElement>) => {
		const isEnterPressed = e.key === 'Enter'
			&& !e.shiftKey
			&& !e.ctrlKey
			&& !e.altKey
			&& !e.metaKey;

		if (isEnterPressed) {
			e.preventDefault();
			handleAddPost();
		}
	}

	const handleProfileAvatarUpload = (file: UploadInputFile) => {
		if (file && file.type && file.type.startsWith('image')) {
			const reader = new FileReader();
			reader.onloadend = () => {
				setUploadAvatar(reader.result);
			};
			reader.readAsDataURL(file);
		} else {
			setUploadAvatar(null);
		}
	}

	const renderProfilePosts = () => {
		return (
			posts.map((post: any) => {
				return (
					<ProfilePost
						key={post.id}
						avatar={myPhoto}
						fullName={'Маргарита Таранова'}
						post={post}
						onUpdateLikesCount={handleIncreasePostLikesCount}
					/>
				)
			})
		)
	}

	return (
		<StyledProfileSection>
			<StyledProfileHeader>
				<StyledProfileHeaderCover />
				<StyledProfileHeaderContent>
					<StyledProfileAvatar>
						<StyledUserImg src={uploadAvatar as string} />
						{/* <StyledUserImg src={defaultAvatar as string} /> */}
						<UploadInput
							onChange={handleProfileAvatarUpload as (file: UploadInputFile | UploadInputFile[]) => void}
						>
							<StyledUploadFileIcon src={uploadFileImg} />
						</UploadInput>
					</StyledProfileAvatar>
					<StyledUserName>
						{"Маргарита Таранова"}
					</StyledUserName>
				</StyledProfileHeaderContent>
			</StyledProfileHeader>
			<StyledProfileContent>
				<ProfileInfo />
				<StyledProfilePosts>
					<StyledProfileContentPosts>
						<ProfileAddPostForm
							onAddPost={handleAddPost}
							onChangePostInput={handleChangePostInput}
							newPostMessage={newPostMessage}
							onKeyDown={onEnter}
						/>
					</StyledProfileContentPosts>
					{renderProfilePosts()}
				</StyledProfilePosts>
			</StyledProfileContent>
		</StyledProfileSection>
	)
};