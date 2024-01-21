import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faMusic, faFilm, faBook } from '@fortawesome/free-solid-svg-icons';


const Home = () => {
    return (
        <header style={{ backgroundColor: 'white' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
                    <FontAwesomeIcon icon={faCoffee} />
                    <FontAwesomeIcon icon={faMusic} />
                    <FontAwesomeIcon icon={faFilm} />
                    <FontAwesomeIcon icon={faBook} />
                </div>
            </div>
        </header>
    );
};

export default Home;
