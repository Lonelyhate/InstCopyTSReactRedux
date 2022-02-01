import React, { FC, useState } from 'react';
import './Search.scss';
import searchImg from '../../../assets/img/search.svg';
import { useTypedSelector } from '../../../hooks/useTypedSelector';
import SearchList from './SearchList';
import { IUsers } from '../../../types/types';

const Search: FC = () => {
    const [value, setValue] = useState<string>('');
    const { users } = useTypedSelector((state) => state.users);
    const seacrhChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
    };

    const newUsers = users.filter((user) => user.nickname.toLowerCase().includes(value));

    return (
        <div className="search">
            <img className="search__img" src={searchImg} alt="search" />
            <input
                value={value}
                onChange={seacrhChange}
                className="search__input"
                placeholder="Поиск"
            />
            {value && <SearchList users={newUsers} />}
        </div>
    );
};

export default Search;
