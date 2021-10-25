import React, {useState} from 'react';

//Assets
import logo from '../../Assets/logost3.png';
//React-Router
import { Link, NavLink } from 'react-router-dom';
//React icons
import {IoMdHome, IoMdSpeedometer} from 'react-icons/io';
import {RiMenu4Fill} from 'react-icons/ri'
import {FaChartPie, FaDatabase} from 'react-icons/fa'
//Ant
import {Drawer} from 'antd';

const Header = () => {

    //Modal
    const [visible, setVisible] = useState(false);

    //Handler
    const showDrawer = () => setVisible(true);
    const onClose = () => setVisible(false);
    


    return (
    
        <header className="navbar">
        <img className="logo" src={logo}/>

        <h1>Reportes <span><IoMdSpeedometer/></span></h1>
        <nav>
            <ul className="flex-center">
                <RiMenu4Fill className="iconHeader" onClick={showDrawer}/> 
            </ul>
        </nav>
        <Drawer className="drawer" title="Menú" placement="right" onClose={onClose} visible={visible}>
            <div className="flex-center-column">
                <div>
                    <NavLink to="/" activeClassName="iconActive"><IoMdHome className="iconHeader" /></NavLink>
                    <p>Home</p>
                </div>

                <div>
                    <NavLink to="/Reports" activeClassName="iconActive"><FaChartPie className="iconHeader"/><p>Reportes</p></NavLink>
                    
                </div>

                <div>
                    <NavLink to="/LR" activeClassName="iconActive"><FaDatabase className="iconHeader"/><p>LR</p></NavLink>
                </div>
                                
            </div>
        </Drawer>

    </header>
    )
}

export default Header
