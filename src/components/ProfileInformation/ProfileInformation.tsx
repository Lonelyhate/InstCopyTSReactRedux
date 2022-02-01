import React, { FC, useState } from 'react';
import { IUsers } from '../../types/types';
import FollowModal from '../FollowModal/FollowModal';
import Avatar from '../UI/Avatar/Avatar';
import './ProfileInformation.scss';

interface ProfileInformationProps {
    user: IUsers;
}

const ProfileInformation: FC<ProfileInformationProps> = ({ user }) => {
    const [isShowSubscriptions, setIsShowSubsciptions] = useState<boolean>(false);
    const [isShowSubscribes, setIsShowSubscribes] = useState<boolean>(false);

    const clickShowModalSubscriptions = () => {
        setIsShowSubsciptions(!isShowSubscriptions);
    };

    const clickShowModalSubscribes = () => {
        setIsShowSubscribes(!isShowSubscribes);
    };

    return (
        <div className="profile-info">
            <Avatar avatarUrl={user.avatar} widthAvatar="150px" heightAvater="150px" />
            <div className="profile-info__content">
                <h2 className="profile-info__nickname">{user.nickname}</h2>
                <div className="profile-info__stat">
                    <button>
                        <span>{user.photos.length}</span> публикаций
                    </button>
                    <button onClick={clickShowModalSubscribes}>
                        <span>{user.follovers.length}</span> подписчиков
                    </button>
                    <button onClick={clickShowModalSubscriptions}>
                        <span>{user.subs.length}</span> подписок
                    </button>
                </div>
                <div className="profile-info__name">{user.name}</div>
                <div className="profile-info__category">{user.category}</div>
                <div className="profile-info__about">{user.about}</div>
                <a href={`https://${user.webSite}`} className="profile-info__website">
                    {user.webSite}
                </a>
            </div>
            <FollowModal
                myFollow={false}
                subscribes={user.subs}
                isShow={isShowSubscriptions}
                clickShow={clickShowModalSubscriptions}
            />
            <FollowModal
                myFollow={true}
                subscribes={user.follovers}
                isShow={isShowSubscribes}
                clickShow={clickShowModalSubscribes}
            />
        </div>
    );
};

export default ProfileInformation;
