
//api
import { ApiResponseType, instance } from "../common-api";
import { ProfileApi } from "../profile";

//types
import { UsersResponseType } from "../../types/users";
import { AxiosResponse } from "axios";

export const UsersApi = {
	getUsers: (currentPage: number = 1, pageSize: number = 10) => {
		return instance.get<UsersResponseType>(`/users?page=${currentPage}&count=${pageSize}`)
			.then((response) => response.data)
	},
	followToUser: (userId: number) => {
		return instance.post<ApiResponseType, AxiosResponse<ApiResponseType>>(`/follow/${userId}`)
			.then((response) => response.data)
	},
	unFollowFromUser: (userId: number) => {
		return instance.delete<ApiResponseType>(`/follow/${userId}`)
			.then((response) => response.data)
	},
	getUserProfile: (userId: number) => {
		return ProfileApi.getUserProfile(userId);
	},
}
