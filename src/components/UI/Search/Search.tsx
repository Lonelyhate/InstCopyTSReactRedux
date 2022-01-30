import React, { FC } from 'react';
import './Search.scss'
import searchImg from '../../../assets/img/search.svg';

const Search: FC = () => {
    return (
        <div className="search">
            <img className='search__img' src={searchImg} alt="search" />
            <input className='search__input' placeholder='Поиск' />
        </div>
    );
};

export default Search;
