import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import './App.css'
import Header from './components/headre/Header'
import Typing from './components/Typing/Typing'

function App() {
  const [people, setPeople] = useState([
    { name: 'Kwizeera', age: '30', location: 'Gatsata', ocupation: 'Developer' },
    { name: 'Manzi Karake', age: '28', location: 'Gatsibo', ocupation: 'Designer' }
  ]);

  return (
    <>
      <Header></Header>
      <Typing card={people} setPeople={setPeople}/>

      <div>
        {people.map((kana,i)=>{
          return <li key={i}>{kana.name}</li>
        })}
      </div>
    </>
  )
}

export default App
