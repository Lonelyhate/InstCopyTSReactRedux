import React, { FC, useState } from 'react';
import ModalBottom from '../ModalBottom/ModalBottom';

interface PublicationHeaderProps {
    avatarImg: string;
    nickname: string;
    location: string | null;
}

const PublicationHeader: FC<PublicationHeaderProps> = ({ avatarImg, nickname, location }) => {
    const [isShowSetings, setIsShowSetings] = useState<boolean>(false);

    const clickShowSetings = () => {
        setIsShowSetings(!isShowSetings);
    };

    return (
        <div className="publication__header">
            <div className="publication__about">
                <div className="publication__img">
                    <img src={avatarImg} alt={nickname} />
                </div>
                <div className="publication__text">
                    <h3 className="publication__nick">{nickname}</h3>
                    <span className="publication__location">{location}</span>
                </div>
            </div>
            <button onClick={clickShowSetings} className="publication__btn">
                ...
            </button>
            <ModalBottom clickShowSetings={clickShowSetings} isShowSetings={isShowSetings} />
        </div>
    );
};

export default PublicationHeader;
