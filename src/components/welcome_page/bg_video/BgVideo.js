import React, { Component } from 'react';
import videoBg from './yoda-hover-meditate-star-wars-battlefront-ii-moewalls-com.mp4'

import '../welcomePage.css';

class BdVideo extends Component {
    render() {
        return (
            <div className='main_video'>
                <div className="overlay"></div>
                <video src={videoBg} autoPlay loop muted />
            </div>
        );
    }
}

export default BdVideo;
