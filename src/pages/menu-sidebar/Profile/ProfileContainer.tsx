import React, { ComponentType, useEffect } from "react";
import { compose, Dispatch } from "redux";
import { connect } from "react-redux";
import { useParams } from 'react-router-dom';

//components
import { Profile } from "./Profile";

//actions
import { addPostAction, changePostLikesCountAction } from "../../../models/actions";

//thunks
import { getUserProfile, getUserProfileStatus, updateUserProfileStatus } from "../../../models/reducers/profile-reducer";

//hoc
import { withAuthRedirect } from "../../../hocs/withAuthRedirect";

//types
import { rootStoreType, useAppDispatch } from "../../../models/store";
import { ProfilePageType } from "../../../models/reducers/profile-reducer";

type ProfileMapStateToPropsType = {
  profilePage: ProfilePageType
}

type ProfilepDispatchToPropsType = {
  // changePostMessage: (newPost: string) => void,
  addPost: (newPostMessage: string) => void,
  increasePostLikesCount: (postId: number, liked: boolean) => void
  getUserProfile: (userId: number) => void
  getUserProfileStatus: (userId: number) => void
  updateUserProfileStatus: (status: string) => void
}

export type ProfileContainerPropsType = ProfileMapStateToPropsType & ProfilepDispatchToPropsType;

const ProfileComponent = (props: ProfileContainerPropsType) => {
  const { status } = props.profilePage;
  const { userId } = useParams();

  const dispatch = useAppDispatch()

  useEffect(() => {
    if (userId) {
      dispatch(getUserProfile(Number(userId)));
      dispatch(getUserProfileStatus(Number(userId)));
    }
  }, [userId]);

  return (
    <Profile {...props} />
  )

}

const mapStateToProps = (state: rootStoreType): ProfileMapStateToPropsType => {
  return {
    profilePage: state.profilePage
  }
}

const mapDispatchToProps = (dispatch: Dispatch): ProfilepDispatchToPropsType => {
  return {
    // changePostMessage: (newPost: string) => { dispatch(changePostMessageAction(newPost)) },
    addPost: (newPostMessage: string) => { dispatch(addPostAction(newPostMessage)) },
    increasePostLikesCount: (postId: number, liked: boolean) => { dispatch(changePostLikesCountAction(postId, liked)) },
    getUserProfile,
    getUserProfileStatus,
    updateUserProfileStatus
  }
}

export const ProfileContainer = compose<ComponentType>(connect(mapStateToProps, mapDispatchToProps), withAuthRedirect)(ProfileComponent);