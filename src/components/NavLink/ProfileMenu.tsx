import React, { FC } from 'react';
import { Link } from 'react-router-dom';

interface ProfileMenuProps {
    items: string[];
}

const ProfileMenu: FC<ProfileMenuProps> = ({ items }) => {
    return (
        <ul className="profile-menu">
            {items.map((item, index) =>
                index === 0 ? (
                    <li key={item} className="profile-menu__item">
                        <Link to='lonely_hate666'>{item}</Link>
                    </li>
                ) : (
                    <li key={item} className="profile-menu__item">
                        <Link to='lonely_hate666'>{item}</Link>
                    </li>
                ),
            )}
        </ul>
    );
};

export default ProfileMenu;
