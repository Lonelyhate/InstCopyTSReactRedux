export type typeSubs = {
    folloversImg: string
    nickname: string
    name: string
}

export type typePhotos = {
    photo: string
    likes: number
    location: string | null
    signature: string
    id_photo: number
}

enum categoryUser {
    ARTIST = 'Деятель исскуств',
    BLOGGER = 'Блогер',
    BUSINESSMAN = 'Предприниматель'
}

export interface IPublication {
    id: number
    id_photo: number
    imageUrl: string
    avatarImg: string
    id_user: number
    nickname: string
    location: string | null
    likes: number
    signature: string
}

export interface IUsers {
    id: number
    avatar: string
    nickname: string
    follovers: typeSubs[]
    subs: typeSubs[]
    name: string
    category: categoryUser.ARTIST | categoryUser.BLOGGER | categoryUser.BUSINESSMAN
    about: string
    webSite: string
    photos: typePhotos[]
}

export interface ISaved {
    id_photo: number
    nickname: string,
    location: string | null
    photo: string
    likes: number
    avatar: string
    signature: string
}