import React, { FC, useState } from 'react';
import { IPublication } from '../../types/types';
import './PublicationItem.scss';
import PublicationHeader from './PublicationHeader';
import PublicationPhoto from './PublicationPhoto';
import PublicationBottom from './PublicationBottom';
import ModalPublication from '../ModalPublication/ModalPublication';

interface PublicationItemProps {
    publication: IPublication;
}

const PublicationsItem: FC<PublicationItemProps> = ({ publication }) => {
    const [isShowModal, setIsShowModal] = useState<boolean>(false);

    const clickShowModal = () => {
        setIsShowModal(!isShowModal);
    };

    return (
        <div className="publication__item">
            <PublicationHeader
                avatarImg={publication.avatarImg}
                location={publication.location}
                nickname={publication.nickname}
            />
            <PublicationPhoto imageUrl={publication.imageUrl} nickname={publication.nickname} />
            <PublicationBottom
                id_photo={publication.id_photo}
                clickShowModal={clickShowModal}
                signature={publication.signature}
                nickname={publication.nickname}
                likes={publication.likes}
                location={publication.location}
                photo={publication.imageUrl}
                avatar={publication.avatarImg}
            />
            <ModalPublication
                avatar={publication.avatarImg}
                likes={publication.likes}
                location={publication.location}
                nickname={publication.nickname}
                photos={publication.imageUrl}
                signature={publication.signature}
                clickShowModal={clickShowModal}
                isShowModal={isShowModal}
                id_photo={publication.id_photo}
            />
        </div>
    );
};

export default PublicationsItem;
