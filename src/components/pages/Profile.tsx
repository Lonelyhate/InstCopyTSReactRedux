import React, { FC, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import PhotosList from '../PhotosList/PhotosList';
import ProfileInformation from '../ProfileInformation/ProfileInformation';
import ProfileSection from '../ProfileSection/ProfileSection';

const Profile: FC = () => {
    const { error, users, loading } = useTypedSelector((state) => state.users);
    const { saveds } = useTypedSelector((state) => state.saveds);

    const currentUser = users[0];

    return (
        <div className="profile-page">
            <ProfileInformation user={currentUser} />
            <ProfileSection nickname={currentUser.nickname} />
            <Routes>
                <Route path="/" element={<PhotosList currentUser={currentUser} />} />
                <Route path={`/saved`} element={<PhotosList saveds={saveds} />} />
            </Routes>
        </div>
    );
};

export default Profile;
