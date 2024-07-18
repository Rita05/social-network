import { useDispatch, useSelector } from "react-redux";
import { useFormik, ErrorMessage, FormikHelpers } from "formik";

//components
import { ProfileInfoTitle } from "../../ProfileInfoTitle/ProfileInfoTitle";

//model
import { getUserProfile } from "../../../model/profile-selectors";
import { updateUserProfile } from "../../../model/profile-reducer";
import { getAppErrors } from "../../../../../../app/model/app-selectors";

//types
import { UserContactsType, UserProfileType } from "../../../../../../common/types/profile";

//styles
import { ErrorText, ProfileInfoEditFormContainer, ProfileInfoEditFormContent, ProfileInfoEditFormField, ProfileInfoEditFormFieldCheckbox, ProfileInfoEditFormFieldLabel, ProfileInfoEditFormFieldTextArea, ProfileInfoEditFormFieldWrapper, ProfileInfoEditFormSectionTitle, SaveEditFormButton } from "./ProfileInfoEditForm.styled";

type Props = {
	isOwner: boolean
	setEditMode: (isEditMode: boolean) => void
}

export const ProfileInfoEditForm = (props: Props) => {
	const { isOwner, setEditMode } = props;
	const profile = useSelector(getUserProfile);

	const dispatch = useDispatch()

	const {
		aboutMe,
		lookingForAJob,
		lookingForAJobDescription,
		fullName,
		contacts,
		userId
	} = profile;

	const formik = useFormik({
		initialValues: {
			fullName: fullName || '',
			lookingForAJob: lookingForAJob || false,
			lookingForAJobDescription: lookingForAJobDescription || '',
			aboutMe: aboutMe || '',
			contacts: {
				github: contacts?.github || '',
				facebook: contacts?.facebook || '',
				vk: contacts?.vk || '',
				instagram: contacts?.instagram || '',
				twitter: contacts?.twitter || '',
				youtube: contacts?.youtube || '',
				mainLink: contacts?.mainLink || '',
				website: contacts?.website || '',
			}
		} as Omit<UserProfileType, 'photos' | 'userId'>,
		onSubmit: async (values: Omit<UserProfileType, 'photos' | 'userId'>, formikHelpers: FormikHelpers<typeof values>) => {
			const updatedContacts = Object.entries(values.contacts).reduce((acc, [key, value]) => {
				(acc as any)[key] = value === '' ? null : value;
				return acc;
			}, {} as UserContactsType);

			try {
				await dispatch(updateUserProfile({
					userId,
					...values,
					contacts: updatedContacts,
				}))
				setEditMode(false);
			} catch (error) {
				const formErrors = parseErrorsToFormikFormat(error as string);
				Object.entries(formErrors).forEach(([field, message]) => {
					formikHelpers.setFieldError(field, message as string);
				});
				formikHelpers.setSubmitting(false);
			}
		}
	});


	const formFields = {
		fullName: 'fullName',
		lookingForAJob: 'lookingForAJob',
		lookingForAJobDescription: 'lookingForAJobDescription',
		aboutMe: 'aboutMe',
		contacts: {
			github: 'github',
			facebook: 'facebook',
			vk: 'vk',
			instagram: 'instagram',
			twitter: 'twitter',
			youtube: 'youtube',
			mainLink: 'mainLink',
			website: 'website'
		}
	};

	const parseErrorsToFormikFormat = (errors: string | string[]) => {
		const formikErrors: Record<string, string> = {};
		const errorArray = Array.isArray(errors) ? errors : [errors];

		errorArray.forEach((error) => {
			let found = false;
			const transformedError = error.toLowerCase();

			Object.entries(formFields).forEach(([field, value]) => {
				if (typeof value === 'string' && transformedError.includes(value.toLowerCase())) {
					formikErrors[field] = error;
					found = true;
				} else if (typeof value === 'object') {
					Object.entries(value).forEach(([nestedField, nestedValue]) => {
						if (transformedError.includes(nestedValue.toLowerCase())) {
							formikErrors[`contacts.${nestedField}`] = error;
							found = true;
						}
					});
				}
			});

			if (!found) {
				console.warn(`Unmatched error: ${error}`);
			}
		});
		return formikErrors;
	};


	const renderContacts = () => {
		return (Object.keys(contacts) as Array<keyof UserContactsType>).map((contact) => {
			const fieldName = `contacts.${contact}`;
			const fieldMeta = formik.getFieldMeta(fieldName);
			const fieldError = formik.errors.contacts ? formik.errors.contacts[contact] : undefined;

			return (
				<ProfileInfoEditFormFieldWrapper key={contact}>
					<ProfileInfoEditFormFieldLabel>{contact}</ProfileInfoEditFormFieldLabel>
					<ProfileInfoEditFormField
						name={`contacts.${contact}`}
						value={formik.values.contacts[contact]}
						onChange={formik.handleChange}
					/>
					{fieldMeta.touched && fieldError && (
						<ErrorText style={{ color: 'red' }}>{fieldError}</ErrorText>
					)}
				</ProfileInfoEditFormFieldWrapper>
			)
		})
	}

	return (
		<ProfileInfoEditFormContainer onSubmit={formik.handleSubmit}>
			<ProfileInfoTitle />
			<ProfileInfoEditFormContent>
				<ProfileInfoEditFormFieldWrapper>
					<ProfileInfoEditFormFieldLabel>ФИО</ProfileInfoEditFormFieldLabel>
					<ProfileInfoEditFormField
						name={'fullName'}
						value={formik.values.fullName}
						onChange={formik.handleChange}
					/>
				</ProfileInfoEditFormFieldWrapper>
				<ProfileInfoEditFormFieldWrapper>
					<ProfileInfoEditFormFieldLabel>Статус поиска работы </ProfileInfoEditFormFieldLabel>
					<ProfileInfoEditFormFieldTextArea
						name={'lookingForAJobDescription'}
						value={formik.values.lookingForAJobDescription}
						onChange={formik.handleChange}
					/>
				</ProfileInfoEditFormFieldWrapper>
				<ProfileInfoEditFormFieldWrapper>
					<ProfileInfoEditFormFieldLabel>Обо мне </ProfileInfoEditFormFieldLabel>
					<ProfileInfoEditFormFieldTextArea
						name={'aboutMe'}
						value={formik.values.aboutMe}
						onChange={formik.handleChange}
					/>
				</ProfileInfoEditFormFieldWrapper>
				<ProfileInfoEditFormFieldWrapper type={'checkbox'}>
					<ProfileInfoEditFormFieldLabel>В поиске работы</ProfileInfoEditFormFieldLabel>
					<ProfileInfoEditFormFieldCheckbox
						name={'lookingForAJob'}
						checked={formik.values.lookingForAJob}
						onChange={formik.handleChange}
					/>
				</ProfileInfoEditFormFieldWrapper>
				<ProfileInfoEditFormSectionTitle>Контакты</ProfileInfoEditFormSectionTitle>
				{renderContacts()}
			</ProfileInfoEditFormContent>
			<SaveEditFormButton
				type={'submit'}
			>
				{'Сохранить'}
			</SaveEditFormButton>
		</ProfileInfoEditFormContainer>
	)
}