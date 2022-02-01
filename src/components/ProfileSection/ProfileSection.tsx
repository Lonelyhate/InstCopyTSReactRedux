import React, { FC, useState } from 'react';
import { Link } from 'react-router-dom';
import './ProfileSection.scss';
import cn from 'classnames'

interface ProfileSection {
    nickname: string;
}

const ProfileSection: FC<ProfileSection> = ({ nickname }) => {

    const [isActiveButton, setIsActiveButton] = useState<boolean>(true) 

    const clickActiveBtn = () => {
        setIsActiveButton(!isActiveButton)
    }

    return (
        <div className="profile-section">
            <Link to={`/${nickname}`}>
                <button onClick={clickActiveBtn} className={cn('profile-section__btn', {
                    active: isActiveButton
                })}>Публикации</button>
            </Link>
            <Link to={`/${nickname}/saved`}>
                <button onClick={clickActiveBtn} className={cn('profile-section__btn', {
                    active: !isActiveButton
                })}>СОХРАНЕННОЕ</button>
            </Link>
        </div>
    );
};

export default ProfileSection;
