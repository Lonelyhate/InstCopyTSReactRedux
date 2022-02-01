import React, { FC } from 'react';
import { typeSubs } from '../../types/types';
import Avatar from '../UI/Avatar/Avatar';
import './FollowItem.scss'

interface FollowItemProps {
    sub: typeSubs
}

const FollowItem: FC<FollowItemProps> = ({sub}) => {
  return <div className='follow-item' >
      <Avatar avatarUrl={sub.folloversImg} widthAvatar='30px' heightAvater='30px'/>
      <div className="follow-item__text">
          <h4 className='follow-item__nickname' >{sub.nickname}</h4>
          <span className='follow-item__name'>{sub.name}</span>
      </div>
  </div>;
};

export default FollowItem;
