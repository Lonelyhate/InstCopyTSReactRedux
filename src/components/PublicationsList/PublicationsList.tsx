import React, { FC, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import './PublicationsList.scss';
import { fetchPublications } from '../../redux/actions/publication';
import PublicationsItem from '../PublicationsItem/PublicationItem';
import './PublicationsList.scss';
import { IPublication } from '../../types/types';
import LoaderPublication from '../loaders/LoaderPublication';

const PublicationsList: FC = () => {
    const { error, publications, loading } = useTypedSelector((state) => state.publication);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchPublications());
    }, []);

    return (
        <div className="publication">
            {!loading
                ? publications.map((publ: IPublication) => (
                      <PublicationsItem key={publ.id} publication={publ} />
                  ))
                : [...Array(3)].map((item, index) => <LoaderPublication key={index} />)}
        </div>
    );
};

export default PublicationsList;
