import { ChangeEvent, KeyboardEvent } from "react"

//styles
import { StyledButtonAddPost, StyledButtonWrapper, StyledInputAddPost, StyledPostForm } from "./ProfileAddPostForm.styled";


type ProfileAddPostFormPropsType = {
	newPostMessage: string
	onChangePostInput: (e: ChangeEvent<HTMLTextAreaElement>) => void
	onAddPost: () => void
	onKeyDown: (e: KeyboardEvent<HTMLTextAreaElement>) => void
}

export const ProfileAddPostForm = (props: ProfileAddPostFormPropsType) => {
	const {
		onAddPost,
		onKeyDown,
		newPostMessage,
		onChangePostInput
	} = props;

	return (
		<StyledPostForm>
			<StyledInputAddPost
				value={newPostMessage}
				name={'add-post'}
				placeholder={"Добавить пост..."}
				onChange={onChangePostInput}
				onKeyDown={onKeyDown}
			/>
			<StyledButtonWrapper isDisabled={!newPostMessage}>
				<StyledButtonAddPost
					onClick={onAddPost}
					isDisabled={!newPostMessage}
				>
					{'Опубликовать'}
				</StyledButtonAddPost>
			</StyledButtonWrapper>
		</StyledPostForm>
	)
}