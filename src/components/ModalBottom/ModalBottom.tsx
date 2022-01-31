import React, { FC } from 'react';
import './ModalBottom.scss';
import cn from 'classnames';

interface ModalHeaderProps {
    isShowSetings: boolean;
    clickShowSetings: () => void;
}

const users = [
    {id: 1,
    avatar: 'img/users/lonely_hate666/1.jpg',
    nickname: 'lonely_hate666',
    follovers: [
        {
            folloversImg: 'img/avatars/1.jpg',
            nickname: 'artem000',
            name: 'Artem dedovskiy',
        },
        {
            folloversImg: 'img/avatars/2.jpg',
            nickname: 'proggramer',
            name: 'Vasiliy',
        },
    ],
    subs: 39,
    name: 'Nigilist',
    category: 'Деятель искусства',
    about: 'Telegram - lonely_hate666',
    webSite: 'vk.com/lonely_hate666',
    photos: ['img/lonely_hate666/photos/1.jpg', 'img/lonely_hate666/photos/2.jpg']}
];

const ModalBottom: FC<ModalHeaderProps> = ({ isShowSetings, clickShowSetings }) => {
    return (
        <div
            onClick={clickShowSetings}
            className={cn('modal-bottom', {
                active: isShowSetings,
            })}>
            <div onClick={(e) => e.stopPropagation()} className="modal-bottom__content">
                <ul className="modal-bottom__list">
                    <li className="modal-bottom__item">
                        <button>Пожаловаться</button>
                    </li>
                    <li className="modal-bottom__item">
                        <button>Отменить подписку</button>
                    </li>
                    <li className="modal-bottom__item">
                        <button>Перейти к публикации</button>
                    </li>
                    <li className="modal-bottom__item">
                        <button onClick={clickShowSetings}>Отмена</button>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default ModalBottom;
