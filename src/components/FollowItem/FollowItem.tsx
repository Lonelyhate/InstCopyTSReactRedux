import React, { FC } from 'react';
import { typeSubs } from '../../types/types';
import Avatar from '../UI/Avatar/Avatar';
import './FollowItem.scss'

interface FollowItemProps {
    photo: string
    nickname: string
    name: string
}

const FollowItem: FC<FollowItemProps> = ({photo, nickname, name}) => {
  return <div className='follow-item' >
      <Avatar avatarUrl={photo} widthAvatar='30px' heightAvater='30px'/>
      <div className="follow-item__text">
          <h4 className='follow-item__nickname' >{nickname}</h4>
          <span className='follow-item__name'>{name}</span>
      </div>
  </div>;
};

export default FollowItem;
