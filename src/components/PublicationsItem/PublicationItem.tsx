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
                clickShowModal={clickShowModal}
                signature={publication.signature}
                nickname={publication.nickname}
                likes={publication.likes}
            />
            <ModalPublication
                publication={publication}
                clickShowModal={clickShowModal}
                isShowModal={isShowModal}
            />
        </div>
    );
};

export default PublicationsItem;
