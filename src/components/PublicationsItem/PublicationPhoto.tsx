import React, { FC } from 'react';

interface PublicationPhoto {
    imageUrl: string
    nickname: string
}

const PublicationPhoto: FC<PublicationPhoto> = ({imageUrl, nickname}) => {
    return (
        <div className="publication__photo">
            <img src={imageUrl} alt={nickname} />
        </div>
    );
};

export default PublicationPhoto;
