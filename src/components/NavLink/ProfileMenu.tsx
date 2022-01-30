import React, { FC } from 'react';

interface ProfileMenuProps {
    items: string[];
}

const ProfileMenu: FC<ProfileMenuProps> = ({ items }) => {
    return (
        <ul className="profile-menu">
            {items.map((item) => (
                <li key={item} className='profile-menu__item'>{item}</li>
            ))}
        </ul>
    );
};

export default ProfileMenu;
