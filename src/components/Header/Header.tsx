import React, { FC } from 'react';
import Logo from './Logo'
import './Header.scss';
import Search from '../UI/Search/Search';
import NavLink from '../NavLink/NavLink';

interface HeaderProps {
    logoUser: string
}

const Header: FC<HeaderProps> = ({logoUser}) => {
    return (
        <header className='header'>
            <div className="header__container">
                <Logo widthLogo='103px' heightLogo='29px' img='../img/logo.png' alt='instagram' />
                <Search/>
                <NavLink profileImg={logoUser} />
            </div>
        </header>
    );
};

export default Header;
