//api
import { ApiResponseType, instance } from "../common-api"

//types
import { UserProfileType } from "../../types/profile";
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
		console.log('status: ', status);
		return instance.put<ApiResponseType, AxiosResponse<ApiResponseType>>(`/profile/status`, { status })
			.then((response) => response.data)
	}
}

