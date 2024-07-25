
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getUserProfilePhotos } from "../model/profile-selectors";

//selectors
import { getRequestStatus } from "../../../../models/selectors";

//components
import UploadInput, { UploadInputFile } from "../../../../elements/ui/uploadInput/UploadInput";
import { ProfilePost } from "./ProfilePost/ProfilePost";
import { ProfileInfo } from "./ProfileInfo/ProfileInfo";
import { ProfileAddPostForm } from "./ProfileAddPostForm/ProfileAddPostForm";
import { ProfileStatus } from "./ProfileStatus/ProfileStatus";
import { Preloader } from "../../../../elements/ui/preloader/Preloader";
import { ProfileInfoEditForm } from "./ProfileInfo/ProfileInfoEditForm/ProfileInfoEditForm";

//icons
import uploadFileImg from '../../../../assets/icons/uploadFile.svg';
import defaultAvatar from '../../../../assets/icons/default-avatar.svg';

//style
import { StyledProfileAvatar, StyledProfileContent, StyledProfileContentPosts, StyledProfileHeader, StyledProfileHeaderContent, StyledProfileHeaderCover, StyledProfileSection, StyledUploadFileIcon, StyledUserImg, StyledUserName, StyledProfilePosts, StyledProfileInfo } from "./Profile.styled";

//types
import { ProfileContainerPropsType } from "./ProfileContainer";
import { UserContactsType, UserProfileType } from "../../../../common/types/profile";

export const Profile = (props: ProfileContainerPropsType) => {
  const {
    profilePage: { posts, profile, status },
    addPost,
    uploadProfileAvatar,
    increasePostLikesCount,
    updateUserProfileStatus,
    updateUserProfile
  } = props;

  const {
    fullName,
    userId
  } = profile;

  const requestStatus = useSelector(getRequestStatus);

  const { userId: paramUserId } = useParams();
  const dispatch = useDispatch();

  const photos = useSelector(getUserProfilePhotos);

  const [editMode, setEditMode] = useState(false);

  const handleAddPost = (newPostMessage: string) => {
    addPost(newPostMessage);
  }

  const handleIncreasePostLikesCount = (postId: number, liked: boolean) => {
    increasePostLikesCount(postId, liked);
  }

  const handleProfileAvatarUpload = (file: UploadInputFile) => {
    if (file && file.type && file.type.startsWith('image')) {
      dispatch(uploadProfileAvatar(file));
    }
  }

  const handleSetEditMode = () => {
    setEditMode(!editMode);
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
                <StyledUserImg src={photos?.large || photos?.small || defaultAvatar} />
                {!paramUserId &&
                  <UploadInput
                    onChange={handleProfileAvatarUpload as (file: UploadInputFile | UploadInputFile[]) => void}
                  >
                    <StyledUploadFileIcon src={uploadFileImg} />
                  </UploadInput>
                }
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
        <StyledProfileInfo>
          {editMode
            ?
            <ProfileInfoEditForm
              isOwner={!paramUserId}
              setEditMode={setEditMode}
            />
            : <ProfileInfo
              isOwner={!paramUserId}
              goToEditMode={handleSetEditMode}
            />}
        </StyledProfileInfo>
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