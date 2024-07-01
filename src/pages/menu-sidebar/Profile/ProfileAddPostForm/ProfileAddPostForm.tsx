import { useFormik } from "formik";
import { KeyboardEvent } from "react"

//utils
import { validateFieldLength } from "../../../../utils/validators/validators";

//styles
import { StyledButtonAddPost, StyledButtonWrapper, StyledInputAddPost, StyledInputAddPostValidation, StyledInputAddPostWrapper, StyledPostForm } from "./ProfileAddPostForm.styled";

type ProfileAddPostFormPropsType = {
	onAddPost: (newPost: string) => void
}

type FormErrorsType = {
	newPost?: string
}

export const ProfileAddPostForm = (props: ProfileAddPostFormPropsType) => {
	const { onAddPost } = props;

	const formik = useFormik({
		initialValues: {
			newPost: '',
		},
		validate: (values) => {
			const errors: FormErrorsType = {};
			const error = validateFieldLength(30)(values.newPost);
			if (error) {
				errors.newPost = error;
			}
			return errors;
		},
		onSubmit: (values) => {
			if (formik.errors.newPost === undefined) {
				onAddPost(values.newPost);
				formik.resetForm();
			}
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
			<StyledInputAddPostWrapper>
				<StyledInputAddPost
					name={'newPost'}
					value={formik.values.newPost}
					placeholder={"Добавить пост..."}
					onChange={formik.handleChange}
					onKeyDown={handleKeyDown}
					error={formik.errors.newPost}
				/>
				{formik.touched.newPost && formik.errors?.newPost &&
					<StyledInputAddPostValidation>
						{formik.errors?.newPost}
					</StyledInputAddPostValidation>
				}
			</StyledInputAddPostWrapper>
			<StyledButtonWrapper isDisabled={!formik.values.newPost}>
				<StyledButtonAddPost
					type={'submit'}
					isDisabled={!formik.values.newPost}
				>
					{'Опубликовать'}
				</StyledButtonAddPost>
			</StyledButtonWrapper>
		</StyledPostForm>
	)
}