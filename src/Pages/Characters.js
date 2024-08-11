import React, { Component } from 'react';
import SWAPI from '../components/swapi/SWAPI';
import Navbar from '../components/navbar/Navbar';


class Characters extends Component {
    render() {
        return (
            <>
                <Navbar />
                <div>
                    <main className="section">
                        <div className="container">
                            <SWAPI />
                        </div>

                    </main>
                </div>
            </>
        );
    }
}

export default Characters;
