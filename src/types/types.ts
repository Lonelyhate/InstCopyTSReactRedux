export type typeSubs = {
    folloversImg: string
    nickname: string
    name: string
}

export type photos = {
    photo: string
    likes: number
    location: string
    signature: string
}

enum categoryUser {
    ARTIST = 'Деятель исскуств',
    BLOGGER = 'Блогер',
    BUSINESSMAN = 'Предприниматель'
}

export interface IPublication {
    id: number
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
    photos: photos[]
}