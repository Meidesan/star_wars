import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import './welcomePage.css';

class WelcomePage extends Component {
    render() {
        return (
            <div className="contant">
                <header className="header">
                    <div className="header__wrapper">
                        <h1 className="header__title">
                            <strong>Young, hello, <em>Padawan</em></strong><br />
                            sit down, let's start now
                        </h1>
                        <div className="header__text">
                            <p>You can find out the information all</p>
                            <p>about characters your favorite</p>
                        </div>

                        <NavLink to="/Characters" className="btn">Go let's</NavLink>
                    </div>
                </header>
            </div>
        );
    }
}

export default WelcomePage;
