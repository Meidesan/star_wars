import React, { Component } from 'react';
import SWAPI from '../components/swapi/SWAPI';
import Navbar from '../components/navbar/Navbar';
import '../styles/main.css';


class Characters extends Component {
    render() {
        return (
            <>
                <Navbar />
                <main >
                    <div className="section">
                        <div className="container">
                            <SWAPI />
                        </div>

                    </div>
                </main>
            </>
        );
    }
}

export default Characters;
