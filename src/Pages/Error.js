import React, { Component } from 'react';
import StarOfDeath from '../img/teamRocket.png';

class Error extends Component {
    render() {
        return (

            <main className="error">
                <div className="container container_error">
                    <div className="error_img_text">
                        <p className="error__text">404</p>
                        <img src={StarOfDeath} className='error_img' alt='StarOfDeath' />
                    </div>

                    <div className="error_btn">
                        <a href="/" className="btn"> Go to back</a>
                    </div>
                </div>
            </main>

        );
    }
}

export default Error;
