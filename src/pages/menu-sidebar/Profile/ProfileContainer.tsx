import React, { ComponentType, useEffect } from "react";
import { compose, Dispatch } from "redux";
import { connect } from "react-redux";
import { useParams } from 'react-router-dom';

//components
import { Profile } from "./Profile";

//reducers
import { getUserProfile, ProfilePageType } from "../../../models/reducers/profile-reducer";

//actions
import { addPostAction, changePostLikesCountAction, changePostMessageAction } from "../../../models/actions";

//hoc
import { withAuthRedirect } from "../../../hocs/withAuthRedirect";

//types
import { rootStoreType, useAppDispatch } from "../../../models/store";

type ProfileMapStateToPropsType = {
  profilePage: ProfilePageType
}

type ProfilepDispatchToPropsType = {
  changePostMessage: (newPost: string) => void,
  addPost: () => void,
  increasePostLikesCount: (postId: number, liked: boolean) => void
  getUserProfile: (userId: number) => void
}

export type ProfileContainerPropsType = ProfileMapStateToPropsType & ProfilepDispatchToPropsType;

const ProfileComponent = (props: ProfileContainerPropsType) => {
  const { userId } = useParams();

  const dispatch = useAppDispatch()

  useEffect(() => {
    if (userId) {
      dispatch(getUserProfile(Number(userId)));
    }
    // (async () => {
    // 	setIsLoading(true)
    // 	if (userId) {
    // 		try {
    // 			const data = await ProfileApi.getUserProfile(userId);
    // 			addUserProfile(data);
    // 		} catch (error) {
    // 			console.log(error);
    // 		} finally {
    // 			setIsLoading(false);
    // 		}
    // 	}
    // })()
    // ProfileApi.getUserProfile(userId)
    // 	.then((data) => {
    // 		setIsLoading(false);
    // 		addUserProfile(data);
    // 	})
    // 	.catch((error) => {
    // 		console.log(error);
    // 	})
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
    changePostMessage: (newPost: string) => { dispatch(changePostMessageAction(newPost)) },
    addPost: () => { dispatch(addPostAction()) },
    increasePostLikesCount: (postId: number, liked: boolean) => { dispatch(changePostLikesCountAction(postId, liked)) },
    getUserProfile
  }
}

export const ProfileContainer = compose<ComponentType>(connect(mapStateToProps, mapDispatchToProps), withAuthRedirect)(ProfileComponent);