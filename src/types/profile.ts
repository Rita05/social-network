
//types
import { UserPhotoType } from "./users"

export type UserProfileType = {
  userId: number
  lookingForAJob: boolean
  lookingForAJobDescription: string
  fullName: string
  contacts: UserContactsType
  photos: UserPhotoType
  aboutMe: string
}

export type UserContactsType = {
  github: string
  vk: string
  facebook: string
  instagram: string
  twitter: string
  website: string
  youtube: string
  mainLink: string
}