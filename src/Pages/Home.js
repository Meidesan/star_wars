import React, { Component } from 'react';
import BgVideo from '../components/welcome_page/bg_video/BgVideo';
import WelcomePage from '../components/welcome_page/WelcomePage';
import Navbar from '../components/navbar/Navbar';

import '../components/welcome_page/welcomePage.css';

class Home extends Component {
    render() {
        return (
            <div className='home_body'>
                <Navbar />
                <BgVideo />
                <WelcomePage />
            </div>
        );
    }
}

export default Home;
