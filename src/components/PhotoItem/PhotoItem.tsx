import React, { FC, useState } from 'react';
import './PhotoItem.scss';
import likeSvg from '../../assets/img/likeWhite.svg';
import ModalPublication from '../ModalPublication/ModalPublication';

interface PhotoItemProps {
    likes: number;
    nickname: string;
    avatar: string;
    photo: string;
    location: string | null;
    signature: string;
    id_photo: number;
    saveds?: boolean;
}

const PhotoItem: FC<PhotoItemProps> = ({
    nickname,
    avatar,
    photo,
    likes,
    location,
    signature,
    id_photo,
    saveds,
}) => {
    const [isShowModal, setIsShowModal] = useState<boolean>(false);

    const clickShowModal = () => {
        setIsShowModal(!isShowModal);
    };

    photo = saveds ? (photo = '../' + photo) : photo;

    return (
        <div className="photo-item">
            <div onClick={clickShowModal} className="photo-item__img">
                <img src={photo} alt={nickname} />
                <div className="photo-item__fon"></div>
                <div className="photo-item__likes">
                    <img src={likeSvg} /> <span>{likes}</span>
                </div>
            </div>
            <ModalPublication
                avatar={avatar}
                likes={likes}
                location={location}
                nickname={nickname}
                photos={photo}
                signature={signature}
                clickShowModal={clickShowModal}
                isShowModal={isShowModal}
                id_photo={id_photo}
            />
        </div>
    );
};

export default PhotoItem;
