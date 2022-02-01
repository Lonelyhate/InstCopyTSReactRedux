import React, { FC } from 'react';
import { IUsers } from '../../types/types';

interface IPhotosListProps {
    user: IUsers
}

const PhotosList :FC<IPhotosListProps> = ({user}) => {
  return <div className='photosList'></div>;
};

export default PhotosList;
