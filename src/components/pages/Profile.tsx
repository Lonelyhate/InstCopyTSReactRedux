import React, { FC, useEffect } from 'react';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import PhotosList from '../PhotosList/PhotosList';
import ProfileInformation from '../ProfileInformation/ProfileInformation';

const Profile: FC = () => {
    const { error, users, loading } = useTypedSelector((state) => state.users);

    const currentUser = users[0]

    return (
        <div className="profile-page">
            <ProfileInformation user={currentUser}/>
            <PhotosList user={currentUser}/>
        </div>
    );
};

export default Profile;
