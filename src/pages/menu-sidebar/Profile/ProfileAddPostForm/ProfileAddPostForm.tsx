import { useFormik } from "formik";
import { ChangeEvent, KeyboardEvent } from "react"

//styles
import { StyledButtonAddPost, StyledButtonWrapper, StyledInputAddPost, StyledPostForm } from "./ProfileAddPostForm.styled";


type ProfileAddPostFormPropsType = {
	// newPostMessage: string
	// onChangePostInput: (e: ChangeEvent<HTMLTextAreaElement>) => void
	onAddPost: (newPost: string) => void
	// onKeyDown: (e: KeyboardEvent<HTMLTextAreaElement>) => void
}

export const ProfileAddPostForm = (props: ProfileAddPostFormPropsType) => {
	const { onAddPost } = props;

	const formik = useFormik({
		initialValues: {
			newPost: '',
		},
		onSubmit: (values) => {
			console.log('values: ', values);
			onAddPost(values.newPost);
			formik.resetForm();
		}
	});

	const handleKeyDown = (e: KeyboardEvent<HTMLTextAreaElement>) => {
		const isEnterPressed = e.key === 'Enter'
			&& !e.shiftKey
			&& !e.ctrlKey
			&& !e.altKey
			&& !e.metaKey;

		if (isEnterPressed) {
			e.preventDefault();
			formik.handleSubmit();
		}
	}

	return (
		<StyledPostForm onSubmit={formik.handleSubmit}>
			<StyledInputAddPost
				name={'newPost'}
				value={formik.values.newPost}
				placeholder={"Добавить пост..."}
				onChange={formik.handleChange}
				// onChange={onChangePostInput}
				onKeyDown={handleKeyDown}
			/>
			<StyledButtonWrapper isDisabled={!formik.values.newPost}>
				<StyledButtonAddPost
					type={'submit'}
					// onClick={onAddPost}
					isDisabled={!formik.values.newPost}
				>
					{'Опубликовать'}
				</StyledButtonAddPost>
			</StyledButtonWrapper>
		</StyledPostForm>
	)
}