import React, { FC, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import './PublicationsList.scss';
import { fetchPublications } from '../../redux/actions/publication';
import PublicationsItem from '../PublicationsItem/PublicationItem';
import './PublicationsList.scss'

const PublicationsList: FC = () => {
    const { error, publications, loading } = useTypedSelector((state) => state.publication);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchPublications());
    }, []);

    return (
        <div className='publication'>
            {publications.map((publ) => (
                <PublicationsItem key={publ.id} publication={publ} />
            ))}
        </div>
    );
};

export default PublicationsList;
