
//api
import { instance } from "../common-api";

//types
import { UsersResponseType, UserSubscriptionResponseType } from "../../types/users";

export const UsersApi = {
	getUsers: (currentPage: number = 1, pageSize: number = 10) => {
		return instance.get<UsersResponseType>(`/users?page=${currentPage}&count=${pageSize}`)
			.then((response) => response.data)
	},
	followToUser: (userId: number) => {
		return instance.post<UserSubscriptionResponseType>(`/follow/${userId}`)
			.then((response) => response.data)
	},
	unFollowFromUser: (userId: number) => {
		return instance.delete<UserSubscriptionResponseType>(`/follow/${userId}`)
			.then((response) => response.data)
	},
}
