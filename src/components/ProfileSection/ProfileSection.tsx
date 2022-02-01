import React, { FC } from 'react';
import './ProfileSection.scss'

const ProfileSection: FC = () => {
    return (
        <div className="profile-section">
            <button className="profile-section__btn active">Публикации</button>
            <button className="profile-section__btn">СОХРАНЕННОЕ</button>
        </div>
    );
};

export default ProfileSection;
