import React, { FC } from 'react';

interface PublicationHeaderProps {
    avatarImg: string
    nickname: string
    location: string | null
}

const PublicationHeader: FC<PublicationHeaderProps> = ({avatarImg, nickname, location}) => {
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
            <button className="publication__btn">...</button>
        </div>
    );
};

export default PublicationHeader;
