import React from 'react'
import NavBar  from './Components/NavBar/NavBar'
import ItemListContainer from './Components/ItemListContainer/ItemListContainer'

const App = () => {

  return (
    <>
        <NavBar/>
        <ItemListContainer greeting="Mis pokemons"/>
    </>
  )
}

export default App