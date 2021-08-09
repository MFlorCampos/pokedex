import React from 'react'

function Header() {
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
            <button 
                onClick='myFunction()'
                className="navbar-toggler collapsed icon" 
                type="button" 
                data-toggle="collapse" 
                data-target="#navbarColor03" 
                aria-controls="navbarColor03" 
                aria-expanded="false" 
                aria-label="Toggle navigation" 
            >
                <span className="navbar-toggler-icon" />
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30">
                        <path stroke="rgba(255, 255, 255)" strokeWidth="2" strokeLinecap="round" strokeMiterlimit="10" d="M4 7h22M4 15h22M4 23h22"/>
                    </svg>

            </button>

            <div 
                className="navbar-collapse collapse" 
                id="myLinks" 
            >
                <div 
                    className="buscador"
                >
                    <input 
                        className="form-control mr-sm-2" 
                        type="text" 
                        placeholder="Buscar" 
                        aria-label="Buscar" 
                        id="formulario"
                    />
                    <button 
                        type="search" 
                        className="button button-search" 
                        id="boton">
                    </button>
                </div>  
            </div>
        </div>
    </nav>    
  )
}

export default Header
