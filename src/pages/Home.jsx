import React from 'react';
import Header from '../components/Header';
import Canales from '../components/Canales';
import Chat from '../components/Chat';

const Home = () => {
    return (
        <>
            <Header/>
            <div className="main-container">
                <Canales/>
                <Chat/>
            </div>
        </>
    );
};

export default Home;