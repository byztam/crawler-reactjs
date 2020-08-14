import React, { useState } from 'react';
import './css/BackTopButton.css';
import {
    Button
} from 'reactstrap';
const BackTopButton = (props) => {
        const [backTopCss, setBackTopCss] = useState("back-to-topOff");
        window.onscroll = function(){
            ScrollVertical();
        };

        function ScrollVertical(){
            var point = document.scrollingElement.scrollTop;
            setBackTopCss(point > 50 ? "back-to-topOn" : "back-to-topOff");
        }

        const backTop_Click = () => {
            if (document.scrollingElement.scrollTop === 0) return;

            const totalScrollDistance = document.scrollingElement.scrollTop;
            let scrollY = totalScrollDistance, oldTimestamp = null;

            function step (newTimestamp) {
                if (oldTimestamp !== null) {
                    // if duration is 0 scrollY will be -Infinity
                    scrollY -= totalScrollDistance * (newTimestamp - oldTimestamp) / 400;
                    if (scrollY <= 0) return document.scrollingElement.scrollTop = 0;
                    document.scrollingElement.scrollTop = scrollY;
                }
                oldTimestamp = newTimestamp;
                window.requestAnimationFrame(step);
            }
            window.requestAnimationFrame(step);
        }

        return (
            <div>
                <Button id="btnBackTop" className={backTopCss} onClick={backTop_Click}><i className="fas fa-long-arrow-up"></i></Button>
            </div>
        );
    }


export default BackTopButton;