import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './components/pages/Home';
import Profile from './components/pages/Profile';
import PublicationsList from './components/PublicationsList/PublicationsList';
import { useTypedSelector } from './hooks/useTypedSelector';
import { fetchUsers } from './redux/actions/users';
import { IUsers } from './types/types';

function App() {
    const { error, users, loading } = useTypedSelector((state) => state.users);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchUsers());
    }, []);

    const currentUser: IUsers = users[0];

    return (
        <div className="App">
            <Header logoUser={currentUser?.avatar} />
            <Routes>
                <Route
                    path="/"
                    element={
                        <Home
                            avatar={currentUser?.avatar}
                            nickname={currentUser?.nickname}
                            name={currentUser?.name}
                        />
                    }
                />
                <Route path={`/${currentUser?.nickname}`} element={<Profile />} />
            </Routes>
        </div>
    );
}

export default App;
