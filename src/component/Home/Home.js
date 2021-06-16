import React from 'react';
import Header from '../Header/Header';
import Main from '../Main/Main';
import TopHeader from '../TopHeader/TopHeader';

const Home = () => {
    return (
        <div>
            <TopHeader></TopHeader>
            <Header></Header>
            <h2 className="p-5 bg-success text-light" style={{textAlign: 'center'}}>The 6 Good reasons to contact us</h2>
            <Main></Main>
        </div>
    );
};

export default Home;