export type UserPhotoType = {
	small: string | null,
	large: string | null
}

export type User = {
	id: number,
	name: string,
	photos: UserPhotoType
	status: string
	followed: boolean,
	uniqueUrlName: string | null
}

export type UsersResponseType = {
	items: Array<User>
	totalCount: number
	error: string
}

export type UserSubscriptionResponseType = {
	resultCode: number
	messages: Array<string>
	data: {}
}