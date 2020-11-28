import React from 'react'
import Logo from './Logo';
import NavLinks from './NavLink';


const Header = () => {
    return (
        <div className="blogHeader">
            <Logo />
            <NavLinks />
        </div>
    )
}

export default Header
