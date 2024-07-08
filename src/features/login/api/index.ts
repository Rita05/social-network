//api
import { ApiResponseType, instance } from "../../../common/api/common-api";

//types
import { AuthUserType, Login } from "../../../common/types/auth";
import { AxiosResponse } from "axios";

export const AuthApi = {
	getCurrentUser: () => {
		return instance.get<ApiResponseType<AuthUserType>>(`/auth/me`)
			.then((response) => { return response.data })
	},
	login: (email: string, password: string, rememberMe: boolean) => {
		return instance
			.post<ApiResponseType<Login>, AxiosResponse<ApiResponseType<Login>>, { email: string, password: string, rememberMe: boolean }>(`/auth/login`, { email, password, rememberMe })
			.then((response) => { return response.data })
	},
	logOut: () => {
		return instance.delete<ApiResponseType>(`/auth/login`)
			.then((response) => { return response.data })
	}
}