import React, { FC } from 'react';
import PublicationPhoto from '../PublicationsItem/PublicationPhoto';
import './ModalPublication.scss';
import cn from 'classnames';
import { IPublication } from '../../types/types';
import PublicationHeader from '../PublicationsItem/PublicationHeader';
import PublicationBottom from '../PublicationsItem/PublicationBottom';

interface ModalPublicationProps {
    isShowModal: boolean;
    clickShowModal: () => void;
    avatar: string
    location: string | null
    nickname:string
    likes: number
    photos: string
    signature: string
}

const ModalPublication: FC<ModalPublicationProps> = ({
    isShowModal,
    clickShowModal,
    avatar,
    location,
    nickname,
    likes,
    photos,
    signature
}) => {
    return (
        <div
            onClick={(e) => clickShowModal()}
            className={cn('publication-modal', {
                active: isShowModal,
            })}>
            <div onClick={(e) => e.stopPropagation()} className="publication-modal__content">
                <div className="publication-modal__left">
                    <PublicationPhoto
                        imageUrl={photos}
                        nickname={nickname}
                    />
                </div>
                <div className="publication-modal__right">
                    <PublicationHeader
                        avatarImg={avatar}
                        location={location}
                        nickname={nickname}
                    />
                    <PublicationBottom
                        signature={signature}
                        nickname={nickname}
                        clickShowModal={clickShowModal}
                        likes={likes}
                    />
                </div>
            </div>
        </div>
    );
};

export default ModalPublication;
