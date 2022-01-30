import React, { FC } from 'react';
import Logo from './Logo'
import './Header.scss';
import Search from '../UI/Search/Search';
import NavLink from '../NavLink/NavLink';

const Header: FC = () => {
    return (
        <header className='header'>
            <div className="header__container">
                <Logo width='103' height='29' img='../img/logo.png' alt='instagram' />
                <Search/>
                <NavLink profileImg='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjy6-T2hSl99tDmNUJqA7UeZxfWA788UBJeLjYFymzTRO0tAFS9gSERdVY2ReyowG8foY&usqp=CAU' />
            </div>
        </header>
    );
};

export default Header;
