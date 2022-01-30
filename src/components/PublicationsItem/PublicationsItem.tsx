import React, { FC } from 'react';
import { IPublication } from '../../types/types';
import './PublicationItem.scss';
import likeImg from '../../assets/img/like.svg';
import commentSvg from '../../assets/img/comment.svg';
import saveImg from '../../assets/img/save.svg';

interface PublicationItemProps {
    publication: IPublication;
}

const PublicationsItem: FC<PublicationItemProps> = ({ publication }) => {
    return (
        <div className="publication__item">
            <div className="publication__header">
                <div className="publication__about">
                    <div className="publication__img">
                        <img src={publication.avatarImg} alt={publication.nickname} />
                    </div>
                    <div className="publication__text">
                        <h3 className="publication__nick">{publication.nickname}</h3>
                        <span className="publication__location">{publication.location}</span>
                    </div>
                </div>
                <button className="publication__btn">...</button>
            </div>
            <div className="publication__photo">
                <img src={publication.imageUrl} alt={publication.nickname} />
            </div>
            <div className="publication__bottom">
                <ul className="publication__btns">
                    <li className="publication__btn-item">
                        <button className="publication__button">
                            <img src={likeImg} />
                        </button>
                    </li>
                    <li className="publication__btn-item">
                        <button className="publication__button">
                            <img src={commentSvg} />
                        </button>
                    </li>
                </ul>
                <button className='publication__button'>
                    <img src={saveImg} alt="" />
                </button>
            </div>
            <div className="publication__likes">{publication.likes} отметок "Нравится"</div>
        </div>
    );
};

export default PublicationsItem;
