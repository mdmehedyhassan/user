import React from 'react';
import Header from '../Header/Header';
import Main from '../Main/Main';
import MainCover from '../MainCover/MainCover';
import MainFooter from '../MainFooter/MainFooter';
import TopHeader from '../TopHeader/TopHeader';

const Home = () => {
    return (
        <div>
            <TopHeader></TopHeader>
            <Header></Header>
            <h2 className="p-5 text-primary" style={{textAlign: 'center'}}>The 6 Good reasons to contact us</h2>
            <Main></Main>
            <MainCover></MainCover>
            <MainFooter></MainFooter>
        </div>
    );
};

export default Home;