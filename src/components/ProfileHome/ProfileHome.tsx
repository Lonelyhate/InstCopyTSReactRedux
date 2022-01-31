import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import Avatar from '../UI/Avatar/Avatar';
import './ProfileHome.scss';

interface ProfileHomeProps {
    avatarUrl: string;
    nickanme: string;
    name: string;
}

const ProfileHome: FC<ProfileHomeProps> = ({ avatarUrl, nickanme, name }) => {
    return (
        <div className="profile-home">
            <Link to={`/${nickanme}`}>
                <Avatar avatarUrl={avatarUrl} widthAvatar="56px" heightAvater="56px" />
                <div className="profile-home__names">
                    <h4>{nickanme}</h4>
                    <span>{name}</span>
                </div>
            </Link>
        </div>
    );
};

export default ProfileHome;
