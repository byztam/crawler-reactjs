import React from 'react';
import HeaderContent from './contents/HeaderContent';
import BodyContentFirst from './contents/BodyContentFirst';
import BodyContentSecond from './contents/BodyContentSecond';
import FooterContent from './contents/FooterContent';

function Home(){
    return (
        <div>
            <HeaderContent/>
            <BodyContentFirst/>
            <BodyContentSecond/>
            <FooterContent/>
        </div>
    );
}

export default Home;