import React from 'react';
import './styles.scss';
import Logo from './../../assets/graphics/logo.png';

const Header = (props) => {
    return (
        <header data-test="headerComponent">
            <div className="wrap">
                <label>My app</label>
                <div className="logo">
                    <img data-test="logoIMG" src={Logo} alt="Logo" title="Logo" />
                </div>
            </div>
        </header>
    )
};

export default Header;