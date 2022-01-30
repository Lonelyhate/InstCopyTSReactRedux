import React, { FC, useState } from 'react';
import './NavLink.scss';
import homeImg from '../../assets/img/home.svg';
import plusImg from '../../assets/img/plus.svg';
import compasImg from '../../assets/img/compas.svg';
import ProfileMenu from './ProfileMenu';
import cn from 'classnames'

interface NavLinkProps {
    profileImg: string;
}

const profileMenuItems = ['Профиль', 'Сохраненное'];

const NavLink: FC<NavLinkProps> = ({ profileImg }) => {
    const [isShowProfileMenu, setIsShowProfileMenu] = useState<boolean>(false);

    return (
        <ul className="nav">
            <li className="nav__item">
                <img src={homeImg} alt="home" />
            </li>
            <li className="nav__item">
                <img src={plusImg} alt="plus" />
            </li>
            <li className="nav__item">
                <img src={compasImg} alt="compas" />
            </li>
            <li className={cn('nav__item', {
                active: isShowProfileMenu
            })}>
                <img
                    onClick={() => setIsShowProfileMenu(!isShowProfileMenu)}
                    src={profileImg}
                    alt="profile"
                />
                <ProfileMenu items={profileMenuItems} />
            </li>
        </ul>
    );
};

export default NavLink;
