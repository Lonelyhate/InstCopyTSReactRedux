import React, { FC, useEffect, useState } from 'react';
import likeImg from '../../assets/img/like.svg';
import commentSvg from '../../assets/img/comment.svg';
import saveImg from '../../assets/img/save.svg';
import saveBlack from '../../assets/img/savedBlack.svg';
import { ISaved } from '../../types/types';
import { useDispatch } from 'react-redux';
import { fetchAddPhoto, fetchDeletePhoto, fetchSaveds } from '../../redux/actions/saved';
import { useTypedSelector } from '../../hooks/useTypedSelector';

interface PublicationBottom {
    likes: number;
    clickShowModal: () => void;
    signature: string;
    nickname: string;
    location: string | null;
    photo: string;
    avatar: string;
    id_photo: number
}

const PublicationBottom: FC<PublicationBottom> = ({
    likes,
    clickShowModal,
    nickname,
    signature,
    avatar,
    location,
    photo,
    id_photo
}) => {

    const dispatch = useDispatch()
    const {saveds} = useTypedSelector(state => state.saveds)
    let IsItemInSaveds = false

    if(saveds.length) {
        IsItemInSaveds = saveds.some(photo => photo.id_photo === id_photo)
    }

    const addSaved = (
        avatar: string,
        location: string | null,
        photo: string,
        nickname: string,
        signature: string,
        likes: number,
        id_photo: number
    ) => {
        const obj: ISaved = {
            avatar: avatar,
            location: location,
            photo: photo,
            nickname: nickname,
            signature: signature,
            likes: likes,
            id_photo: id_photo
        };

        if(IsItemInSaveds) {
            dispatch(fetchDeletePhoto(obj.id_photo))
        } else {
            dispatch(fetchAddPhoto(obj))
        }
    };

    return (
        <div className="publication__bottom">
            <div className="publication__bottom-btns">
                <ul className="publication__btns">
                    <li className="publication__btn-item">
                        <button className="publication__button">
                            <img src={likeImg} />
                        </button>
                    </li>
                    <li className="publication__btn-item">
                        <button onClick={clickShowModal} className="publication__button">
                            <img src={commentSvg} />
                        </button>
                    </li>
                </ul>
                <button
                    onClick={() => addSaved(avatar, location, photo, nickname, signature, likes, id_photo)}
                    className="publication__button">
                    <img src={!IsItemInSaveds ? saveImg : saveBlack} alt="" />
                </button>
            </div>
            <div className="publication__signature">
                <strong>{nickname}</strong> <span>{signature}</span>
            </div>
            <div className="publication__likes">{likes} отметок "Нравится"</div>
        </div>
    );
};

export default PublicationBottom;
