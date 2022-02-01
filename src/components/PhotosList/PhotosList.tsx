import React, { FC } from 'react';
import { ISaved, IUsers, typePhotos } from '../../types/types';
import PhotoItem from '../PhotoItem/PhotoItem';
import './PhotosList.scss';

interface IPhotosListProps {
    currentUser?: IUsers;
    saveds?: ISaved[];
}

const PhotosList: FC<IPhotosListProps> = ({ currentUser, saveds }) => {
    return (
        <div className="photos-list">
            {currentUser
                ? currentUser.photos.map((photo) => (
                      <PhotoItem
                          key={photo.photo}
                          photo={photo.photo}
                          nickname={currentUser.nickname}
                          avatar={currentUser.avatar}
                          likes={photo.likes}
                          location={photo.location}
                          signature={photo.signature}
                          id_photo={photo.id_photo}
                      />
                  ))
                : saveds?.map((photo) => (
                      <PhotoItem
                          key={photo.photo}
                          photo={photo.photo}
                          nickname={photo.nickname}
                          avatar={photo.avatar}
                          likes={photo.likes}
                          location={photo.location}
                          signature={photo.signature}
                          id_photo={photo.id_photo}
                          saveds={true}
                      />
                  ))}
        </div>
    );
};

export default PhotosList;
