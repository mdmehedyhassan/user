import React from 'react';
import Header from '../Header/Header';
import TopHeader from '../TopHeader/TopHeader';

const Home = () => {
    return (
        <div>
            <TopHeader></TopHeader>
            <Header></Header>
            <h2 className="p-5 bg-success text-light" style={{textAlign: 'center'}}>The 6 Good reasons to contact us</h2>
        </div>
    );
};

export default Home;