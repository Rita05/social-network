import React, { ComponentType, useEffect } from "react";
import { compose, Dispatch } from "redux";
import { connect } from "react-redux";
import { useNavigate, useParams } from 'react-router-dom';

//components
import { Profile } from "./Profile";

//actions
import { addPostAction, changePostLikesCountAction } from "../../../../models/actions";

//thunks
import { getUserProfile, getUserProfileStatus, updateUserProfile, updateUserProfileStatus, uploadProfileAvatar } from "../model/profile-reducer";

//hoc
import { withAuthRedirect } from "../../../../common/hocs/withAuthRedirect";

//types
import { rootStoreType, useAppDispatch } from "../../../../app/store";
import { ProfilePageType } from "../model/profile-reducer";
import { UserProfileType } from "../../../../common/types/profile";


type ProfileMapStateToPropsType = {
  profilePage: ProfilePageType,
  authorizedUserId: number | null,
  isAuth: boolean
}

type ProfilepDispatchToPropsType = {
  addPost: (newPostMessage: string) => void,
  increasePostLikesCount: (postId: number, liked: boolean) => void
  getUserProfile: (userId: number) => void
  getUserProfileStatus: (userId: number) => void
  updateUserProfileStatus: (status: string) => void
  uploadProfileAvatar: (file: File) => void
  updateUserProfile: (profile: Omit<UserProfileType, 'photos'>) => void
}

export type ProfileContainerPropsType = ProfileMapStateToPropsType & ProfilepDispatchToPropsType;

const ProfileComponent = (props: ProfileContainerPropsType) => {
  const { userId: paramUserId } = useParams();

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const userId = paramUserId ? Number(paramUserId) : props.authorizedUserId;

  useEffect(() => {
    if (!userId) {
      navigate('/login');
    } else {
      dispatch(getUserProfile(userId));
      dispatch(getUserProfileStatus(userId));
      return;
    }

  }, [userId]);

  return (
    <Profile {...props} />
  )

}

const mapStateToProps = (state: rootStoreType): ProfileMapStateToPropsType => {
  return {
    profilePage: state.profilePage,
    authorizedUserId: state.auth.id,
    isAuth: state.auth.isAuth
  }
}

const mapDispatchToProps = (dispatch: Dispatch): ProfilepDispatchToPropsType => {
  return {
    addPost: (newPostMessage: string) => { dispatch(addPostAction(newPostMessage)) },
    increasePostLikesCount: (postId: number, liked: boolean) => { dispatch(changePostLikesCountAction(postId, liked)) },
    getUserProfile,
    getUserProfileStatus,
    updateUserProfileStatus,
    uploadProfileAvatar,
    updateUserProfile
  }
}

export const ProfileContainer = compose<ComponentType>(connect(mapStateToProps, mapDispatchToProps), withAuthRedirect)(ProfileComponent);