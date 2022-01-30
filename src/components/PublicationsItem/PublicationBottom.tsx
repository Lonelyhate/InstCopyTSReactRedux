import React, { FC } from 'react';
import likeImg from '../../assets/img/like.svg';
import commentSvg from '../../assets/img/comment.svg';
import saveImg from '../../assets/img/save.svg';

interface PublicationBottom {
    likes: number
    clickShowModal: () => void
}

const PublicationBottom: FC<PublicationBottom> = ({likes, clickShowModal}) => {

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
                <button className="publication__button">
                    <img src={saveImg} alt="" />
                </button>
            </div>
            <div className="publication__likes">{likes} отметок "Нравится"</div>
        </div>
    );
};

export default PublicationBottom;
