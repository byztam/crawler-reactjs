import React from 'react';
import HeaderContent from '../contents/HeaderContent';
import BodyContentFirst from '../contents/BodyContentFirst';
import BodyContentSecond from '../contents/BodyContentSecond';
function MainContent(){
    return (
    <div>
        <HeaderContent/>
        <BodyContentFirst/>
        <BodyContentSecond/>
    </div>
    );
}

export default MainContent;