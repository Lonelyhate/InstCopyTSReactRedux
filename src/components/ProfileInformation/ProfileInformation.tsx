import React, { FC } from 'react';
import { IUsers } from '../../types/types';
import Avatar from '../UI/Avatar/Avatar';
import './ProfileInformation.scss';

interface ProfileInformationProps {
    user: IUsers;
}

const ProfileInformation: FC<ProfileInformationProps> = ({ user }) => {
    return (
        <div className="profile-info">
            <Avatar avatarUrl={user.avatar} widthAvatar="150px" heightAvater="150px" />
            <div className="profile-info__content">
                <h2 className="profile-info__nickname">{user.nickname}</h2>
                <div className="profile-info__stat">
                    <button>
                        <span>{user.photos.length}</span> публикаций
                    </button>
                    <button>
                        <span>{user.follovers.length}</span> подписчиков
                    </button>
                    <button>
                        <span>{user.subs.length}</span> подписок
                    </button>
                </div>
                <div className="profile-info__name">{user.name}</div>
                <div className="profile-info__category">{user.category}</div>
                <div className="profile-info__about">{user.about}</div>
                <a href={`https://${user.webSite}`} className="profile-info__website">{user.webSite}</a>
            </div>
        </div>
    );
};

export default ProfileInformation;
