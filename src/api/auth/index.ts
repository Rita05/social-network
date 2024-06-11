//api
import { instance } from "../common-api";

//types
import { AuthUserType } from "../../types/auth";

type AuthResponseType = {
	resultCode: 0
	messages: [],
	data: AuthUserType
}

export const AuthApi = {
	getCurrentUser: () => {
		return instance.get<AuthResponseType>(`/auth/me`)
			.then((response) => { return response.data})
	},
}