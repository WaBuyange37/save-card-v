import React from 'react'
import s from './Header.module.css'
import styled from 'styled-components'

const MyDiv = styled.div`
  width: 100%;
  overflow-x: hidden;
  background-color: #183B4E;
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  color: #706D54;
  font-size: x-large;
`

const Header = () => {
  return (
    <MyDiv className={s.header}>
      
      We create cards: enter your name, age, location and occupation
     
    </MyDiv>
  )
}

export default Header
