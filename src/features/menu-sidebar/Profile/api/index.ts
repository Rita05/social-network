//api
import { ApiResponseType, instance } from "../../../../common/api/common-api"

//types
import { UserProfileType } from "../../../../common/types/profile";
import { AxiosResponse } from "axios";

export const ProfileApi = {
	getUserProfile: (userId: number) => {
		return instance.get<UserProfileType>(`profile/${userId}`)
			.then((response) => response.data)
	},
	getUserProfileStatus: (userId: number) => {
		return instance.get(`/profile/status/${userId}`)
			.then((response) => response.data)
	},
	updateUserProfileStatus: (status: string) => {
		return instance.put<ApiResponseType, AxiosResponse<ApiResponseType>>(`/profile/status`, { status })
			.then((response) => response.data)
	},
	updateUserProfileAvatar: (file: File) => {
		const formData = new FormData();
		formData.append('image', file);
		return instance.put<ApiResponseType<{data: Pick<UserProfileType, 'photos'>}>, AxiosResponse<ApiResponseType<{data: Pick<UserProfileType, 'photos'>}>>, FormData>(`/profile/photo`, formData, {
			headers: {
				'Content-Type': 'multipart/form-data'
			}
		})
			.then((response) => response.data)
	},
	updateUserProfile: (profile: Omit<UserProfileType, 'photos'>) => {
		return instance.put<ApiResponseType, AxiosResponse<ApiResponseType>>(`/profile`, profile)
			.then((response) => response.data)
	}
}

