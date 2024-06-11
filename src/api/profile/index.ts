//api
import { instance } from "../common-api"

//types
import { UserProfileType } from "../../types/profile"

export const ProfileApi = {
	getUserProfile: (userId: number) => {
		return instance.get<UserProfileType>(`/profile/${userId}`)
			.then((response) => response.data)
	},
}