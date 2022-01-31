import React, { FC } from 'react';
import './Avatar.scss';

interface AvatarProps {
    avatarUrl: string;
    widthAvatar: string;
    heightAvater: string;
}

const Avatar: FC<AvatarProps> = ({ avatarUrl, widthAvatar, heightAvater }) => {

    console.log(avatarUrl)
    return (
        <div style={{ width: widthAvatar, height: heightAvater }} className="avatar">
            <img src={avatarUrl} alt=''/>
        </div>
    );
};

export default Avatar;
