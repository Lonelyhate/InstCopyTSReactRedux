import React, { FC } from 'react';
import { IUsers } from '../../../types/types';
import FollowItem from '../../FollowItem/FollowItem';

interface SearchListProps {
    users: IUsers[];
}

const SearchList: FC<SearchListProps> = ({ users }) => {
    return (
        <div className="search-list">
            <ul className="serach-list__users">
                {users.map((user) => (
                    <li className="search-list__item">
                        <FollowItem photo={user.avatar} nickname={user.nickname} name={user.name} />
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default SearchList;
