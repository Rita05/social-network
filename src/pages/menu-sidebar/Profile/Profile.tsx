
import React, { useState } from "react";
import { useSelector } from "react-redux";

//selectors
import { getRequestStatus } from "../../../models/selectors";

//components
import UploadInput, { UploadInputFile } from "../../../elements/ui/uploadInput/UploadInput";
import { ProfilePost } from "./ProfilePost/ProfilePost";
import { ProfileInfo } from "./ProfileInfo/ProfileInfo";
import { ProfileAddPostForm } from "./ProfileAddPostForm/ProfileAddPostForm";
import { ProfileStatus } from "./ProfileStatus/ProfileStatus";
import { Preloader } from "../../../elements/ui/preloader/Preloader";

//icons
import uploadFileImg from '../../../assets/icons/uploadFile.svg';
import myPhoto from '../../../assets/icons/my-photo.jpg';
import defaultAvatar from '../../../assets/icons/default-avatar.svg';

//style
import { StyledProfileAvatar, StyledProfileContent, StyledProfileContentPosts, StyledProfileHeader, StyledProfileHeaderContent, StyledProfileHeaderCover, StyledProfileSection, StyledUploadFileIcon, StyledUserImg, StyledUserName, StyledProfilePosts } from "./Profile.styled";

//types
import { ProfileContainerPropsType } from "./ProfileContainer";


export const Profile = (props: ProfileContainerPropsType) => {
  const {
    profilePage: { posts, profile, status },
    addPost,
    increasePostLikesCount,
    updateUserProfileStatus
  } = props;

  const {
    userId,
    fullName,
    photos
  } = profile;

  const [uploadAvatar, setUploadAvatar] = useState<string | ArrayBuffer | null>(myPhoto);
  const requestStatus = useSelector(getRequestStatus);

  const handleAddPost = (newPostMessage: string) => {
    addPost(newPostMessage);
  }

  const handleIncreasePostLikesCount = (postId: number, liked: boolean) => {
    increasePostLikesCount(postId, liked);
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
      posts.map((post) => {
        return (
          <ProfilePost
            key={post.id}
            avatar={photos?.small}
            fullName={fullName}
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
        {requestStatus === 'loading' ? <Preloader /> : (
          <>
            <StyledProfileHeaderCover />
            <StyledProfileHeaderContent>
              <StyledProfileAvatar>
                <StyledUserImg src={photos?.small || defaultAvatar} />
                <UploadInput
                  onChange={handleProfileAvatarUpload as (file: UploadInputFile | UploadInputFile[]) => void}
                >
                  <StyledUploadFileIcon src={uploadFileImg} />
                </UploadInput>
              </StyledProfileAvatar>
              <StyledUserName>
                {fullName}
              </StyledUserName>
              <ProfileStatus
                status={status}
                updateProfileStatus={updateUserProfileStatus}
              />
            </StyledProfileHeaderContent>
          </>
        )}
      </StyledProfileHeader>
      <StyledProfileContent>
        <ProfileInfo />
        <StyledProfilePosts>
          <StyledProfileContentPosts>
            <ProfileAddPostForm
              onAddPost={handleAddPost}
            />
          </StyledProfileContentPosts>
          {renderProfilePosts()}
        </StyledProfilePosts>
      </StyledProfileContent>
    </StyledProfileSection>
  )
};