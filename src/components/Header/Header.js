import React from 'react';
import Button from 'react-bootstrap/Button';
import Jumbotron from 'react-bootstrap/Jumbotron'
import './Header.css'

const Header = () => {
    return (
        <div>
            <Jumbotron className='header-jumbo'>
               <h1 className='tittle'>Know Your Team</h1>
            </Jumbotron>
        </div>
    );
};

export default Header;