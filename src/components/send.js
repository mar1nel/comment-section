import React from "react";
import "./send.scss";
import { Textarea } from '@nextui-org/react';

const Send = ()=> {

    const textareaStyles = {
        width: "500px",
        color: "#8c8d8f",
        paddingLeft: "10px",
        paddingTop: "10px",
        fontFamily: "Poppins",
    };

    return(
        <>
            <div className="sendPanel">
                <div className="author">
                    <img className="authorPicSend" src="https://resizing.flixster.com/yLX51ssr5B7frEgwZCeV7N68gJw=/300x300/v2/https://flxt.tmsimg.com/assets/p3099992_e_h9_ab.jpg" alt=""/>
                </div>
                <Textarea className="textarea"
                    // label="mar1nel"
                    style={textareaStyles}
                    placeholder="Enter your amazing ideas."
                />
                {/*<textarea className="textarea" placeholder="Enter your amazing ideas."></textarea>*/}
                <a className="sendIcon" href="">
                    <svg width="30" height="30" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M3.26219 0.244155C1.47519 -0.648845 -0.502813 1.05616 0.116187 2.95516L4.13019 15.2602C4.24372 15.6078 4.45039 15.9176 4.72772 16.156C5.00506 16.3944 5.34244 16.5521 5.70319 16.6122L21.5632 19.2552C22.3982 19.3952 22.3982 20.5952 21.5632 20.7352L5.70419 23.3782C5.34344 23.4382 5.00606 23.5959 4.72872 23.8343C4.45139 24.0727 4.24472 24.3825 4.13119 24.7302L0.116187 37.0422C-0.503813 38.9422 1.47519 40.6472 3.26219 39.7542L38.7562 22.0122C40.4152 21.1822 40.4152 18.8152 38.7562 17.9862L3.26219 0.244155Z" fill="#696699"/>
                    </svg>
                </a>
            </div>
        </>
    );
}

export default Send;