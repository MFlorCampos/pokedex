import React from 'react'
import Search from './search/Search';

function Header(props) {
    return (
        <nav
        id="navbar"
        className="navbar navbar-expand-lg navbar-light"
        >
            <div className="navbar-container container">
                <div className="navbar-brand">
                    <a className="navbar-brand-logo" href="index.html">Pokedex
                    </a>
                </div>
                <Search {...props} />
            </div>
        </nav>    
    )
}

export default Header
