import React from 'react';

import { Link } from 'react-router-dom';

import logo from '../../Assets/logost3.png';

import {IoMdHome, IoMdSpeedometer} from 'react-icons/io';

const Header = () => {
    return (
    
        <header className="navbar">
        <img className="logo" src={logo}/>

        <h1>Reportes <span><IoMdSpeedometer/></span></h1>
        <nav>
            <ul className="flex-center">
                <Link to="/"> <IoMdHome className="iconHeader"/> </Link>
            </ul>
        </nav>

    </header>
    )
}

export default Header
