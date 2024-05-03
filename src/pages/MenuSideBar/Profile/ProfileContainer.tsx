




import React from "react";
import { StoreContext } from "../../../models/StoreContent";

//components
import { Profile } from "./Profile";

//actions
import { changePostMessageAction, addPostAction, changePostLikesCountAction } from "../../../models/profile-actions";

//types
import { ProfilePageType } from "../../../models/old-store";

type ProfilePagePropsType = {
	profilePage: ProfilePageType
	dispatch: any
}


export const ProfileContainer = () => {

	// const { profilePage: { posts, newPostMessage } } = store.getState();
	// const { dispatch } = store;

	return (
		<StoreContext.Consumer>
			{
				(store) => {
					let state = store.getState();
					const handleChangePostMessage = (newPost: string) => {
						const action = changePostMessageAction(newPost)
						store.dispatch(action);
					}

					const handleAddPost = () => {
						store.dispatch(addPostAction());
					}

					const handleIncreasePostLikesCount = (postId: number, liked: boolean) => {
						store.dispatch(changePostLikesCountAction(postId, liked));
					}
					return <Profile
						changePostMessage={handleChangePostMessage}
						addPost={handleAddPost}
						increasePostLikesCount={handleIncreasePostLikesCount}
						posts={state.profilePage.posts}
						newPostMessage={state.profilePage.newPostMessage}
					/>
				}
			}
		</StoreContext.Consumer>
	)
};
