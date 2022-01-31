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
    follovers: any[]
    subs: any[]
    name: string
    category: categoryUser
    about: string
    webSite: string
    photos: string[]
}