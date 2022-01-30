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