import React, { FC, useState } from 'react';
import { typePhotos } from '../../types/types';
import './PhotoItem.scss';
import likeSvg from '../../assets/img/likeWhite.svg';
import ModalPublication from '../ModalPublication/ModalPublication';

interface PhotoItemProps {
    photo: typePhotos;
    nickname: string;
    avatar: string
}

const PhotoItem: FC<PhotoItemProps> = ({ photo, nickname, avatar }) => {

    const [isShowModal, setIsShowModal] = useState<boolean>(false)

    const clickShowModal = () => {
        setIsShowModal(!isShowModal)
    }

    return (
        <div className="photo-item">
            <div onClick={clickShowModal} className="photo-item__img">
                <img src={photo.photo} alt={nickname} />
                <div className='photo-item__fon'></div>
                <div className="photo-item__likes">
                    <img src={likeSvg} /> <span>{photo.likes}</span>
                </div>
            </div>
            <ModalPublication
                avatar={avatar}
                likes={photo.likes}
                location={photo.location}
                nickname={nickname}
                photos={photo.photo}
                signature={photo.signature}
                clickShowModal={clickShowModal}
                isShowModal={isShowModal}
            />
        </div>
    );
};

export default PhotoItem;
