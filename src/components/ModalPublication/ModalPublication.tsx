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
    publication: IPublication;
}

const ModalPublication: FC<ModalPublicationProps> = ({
    isShowModal,
    clickShowModal,
    publication,
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
                        imageUrl={publication.imageUrl}
                        nickname={publication.nickname}
                    />
                </div>
                <div className="publication-modal__right">
                    <PublicationHeader
                        avatarImg={publication.avatarImg}
                        location={publication.location}
                        nickname={publication.nickname}
                    />
                    <PublicationBottom
                        signature={publication.signature}
                        nickname={publication.nickname}
                        clickShowModal={clickShowModal}
                        likes={publication.likes}
                    />
                </div>
            </div>
        </div>
    );
};

export default ModalPublication;
