import React from 'react';

import logo from '../Assets/logost.png';
import {Link} from 'react-router-dom';

const Main = () => {
    return (
        <div className="container flex-center">
        <div className="menu-center">
            <img className="logo" src={logo} />

            <Link to ="/Reports"><h1 className="title-enter">Entrar</h1> </Link>
        </div>
    </div>
    )
}

export default Main
