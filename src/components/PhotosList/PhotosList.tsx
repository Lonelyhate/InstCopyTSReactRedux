import React, { FC } from 'react';
import { typePhotos } from '../../types/types';
import PhotoItem from '../PhotoItem/PhotoItem';
import './PhotosList.scss';

interface IPhotosListProps {
    photos: typePhotos[];
    nickname: string;
    avatar: string;
}

const PhotosList: FC<IPhotosListProps> = ({ photos, nickname, avatar }) => {
    
    return (
        <div className="photos-list">
            {photos.map((photo) => (
                <PhotoItem key={photo.photo} photo={photo} nickname={nickname} avatar={avatar} />
            ))}
        </div>
    );
};

export default PhotosList;
