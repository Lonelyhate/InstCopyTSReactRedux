import React, { FC } from 'react';
import ProfileHome from '../ProfileHome/ProfileHome';
import PublicationsList from '../PublicationsList/PublicationsList';
import './Pages.scss';

interface HomeProps {
    avatar: string;
    nickname: string;
    name: string;
}

const Home: FC<HomeProps> = ({ avatar, nickname, name }) => {
    return (
        <div className='home'>
            <PublicationsList />
            <ProfileHome avatarUrl={avatar} nickanme={nickname} name={name} />
        </div>
    );
};

export default Home;
