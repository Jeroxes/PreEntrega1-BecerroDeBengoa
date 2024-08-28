import React from 'react'
import "./NavBar.css"
import  CartWidget from '../CartWidget/CartWidget'

const NavBar = () => {

  return (
        <header>
            <h1>PokeStore</h1>
            <nav>
                <ul>
                    <li>Región</li>
                    <li>Tipo</li>
                    <li>Legendarios</li>
                    <li>Número</li>
                </ul>
            </nav>

            <CartWidget/>

        </header>
  )
}

export default NavBar


