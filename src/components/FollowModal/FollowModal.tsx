import React, { FC } from 'react';
import { typeSubs } from '../../types/types';
import FollowItem from '../FollowItem/FollowItem';
import './FollowModal.scss';
import cn from 'classnames';

interface FollowModalProps {
    myFollow: boolean;
    subscribes: typeSubs[];
    isShow: boolean;
    clickShow: () => void;
}

const FollowModal: FC<FollowModalProps> = ({ myFollow, subscribes, isShow, clickShow }) => {
    return (
        <div
            onClick={clickShow}
            className={cn('follow-modal', {
                active: isShow,
            })}>
            <div onClick={(e) => e.stopPropagation()} className="follow-modal__content">
                <div className="follow-modal__header">
                    <h3 className="follow-modal__title">{myFollow ? 'Подписчики' : 'Подписки'}</h3>
                    <button onClick={clickShow} className="follow-modal__close">
                        &times;
                    </button>
                </div>
                <ul className="follow-modal__list">
                    {subscribes.map((sub) => (
                        <FollowItem
                            key={sub.nickname}
                            photo={sub.folloversImg}
                            nickname={sub.nickname}
                            name={sub.name}
                        />
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default FollowModal;
