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
	login: (email: string, password: string, rememberMe: boolean, captcha: string | null = null) => {
		return instance
			.post<ApiResponseType<Login>, AxiosResponse<ApiResponseType<Login>>, { email: string, password: string, rememberMe: boolean, captcha: string | null }>(`/auth/login`, { email, password, rememberMe, captcha })
			.then((response) => { return response.data })
	},
	logOut: () => {
		return instance.delete<ApiResponseType>(`/auth/login`)
			.then((response) => { return response.data })
	}
}

export const securityApi = {
	getCaptcha: () => {
		return instance.get<{url: string}>('/security/get-captcha-url')
			.then((response) => {return response});
	}
}

