import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import './App.css'
import Header from './components/headre/Header'
import Typing from './components/Typing/Typing'
import Cards from './pages/Cards'

function App() {
  const [people, setPeople] = useState([
    { name: 'Kwizeera', age: '30', location: 'Gatsata', ocupation: 'Developer' },
    { name: 'Manzi Karake', age: '28', location: 'Gatsibo', ocupation: 'Designer' }
  ]);

  return (
    <>
      <Header></Header>
      <Typing card={people} setPeople={setPeople}/>

      <Cards umuntu={people}/>
    </>
  )
}

export default App
