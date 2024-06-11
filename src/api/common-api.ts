import axios from "axios";

export type ErrorType = {
    message: string,
    error: string
    statusCode: number
}

export enum STATUS_CODE {
    SUCCESSS = 0,
    ERROR = 1,
    RECAPTCHA_ERROR = 10
}

export const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0',
    withCredentials: true,
    headers: { 'API-KEY': '58168fc6-501f-45c0-8b28-067fd6329d13' }
})