import axios from "axios";

export type ErrorType = {
	message: string,
	error: string
	statusCode: number
}

export enum STATUS_CODE {
	SUCCESS = 0,
	ERROR = 1,
	RECAPTCHA_ERROR = 10
}

export type ApiResponseType<T = {}> = {
	resultCode: 0
	messages: string[],
	data: T
}

export const instance = axios.create({
	baseURL: 'https://social-network.samuraijs.com/api/1.0',
	headers: { 'API-KEY': '58168fc6-501f-45c0-8b28-067fd6329d13' },
	withCredentials: true,
})