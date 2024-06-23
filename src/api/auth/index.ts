//api
import { ApiResponseType, instance } from "../common-api";

//types
import { AuthUserType } from "../../types/auth";

export const AuthApi = {
	getCurrentUser: () => {
		return instance.get<ApiResponseType<AuthUserType>>(`/auth/me`)
			.then((response) => { return response.data })
	},
}