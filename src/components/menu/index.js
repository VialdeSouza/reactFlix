import React from 'react';
import logo from '../../assets/img/logo.png'
import './Menu.css'
import Button from '../Button'
import { Link } from 'react-router-dom'

function Menu() {
    return <nav className='Menu'>
        <Link to='/'>
            <img src={logo} className='Logo' />
        </Link>
        <Button as={Link} to="/cadastro/video" className='ButtonLink'>
            Novo vídeo
        </Button>
    </nav>
}

export default Menu;