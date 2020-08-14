import React from 'react';
import HeaderContent from './contents/HeaderContent';
import BodyContentFirst from './contents/BodyContentFirst';
import BodyContentSecond from './contents/BodyContentSecond';
import FooterContent from './contents/FooterContent';
import BackTopButton from '../common/BackTopButton';

function Home(){
    return (
        <div>
            <HeaderContent/>
            <BodyContentFirst/>
            <BodyContentSecond/>
            <FooterContent/>
            <BackTopButton/>
        </div>
    );
}

export default Home;