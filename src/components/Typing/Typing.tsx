
import React,{ useState } from 'react';
import styled from 'styled-components';
const MySpan = styled.span`
  display: flex;
  justify-content: space-around;
`

interface Card{
  name:string;
  age: string;
  location: string;
  ocupation: string;
}
interface Props{
  card: Card[];
  setPeople: React.Dispatch<React.SetStateAction<Card[]>>;
}

const Typing = ({card, setPeople}:Props) => {
  //for onchangeInput
  const [injiza,setInjiza]= useState<{name:string;age:string;location:string;ocupation:string}>({
    name: '',
    age: '',
    location: '',
    ocupation: '',
  });
  
  const mychange = (e: React.ChangeEvent<HTMLInputElement>)=>{
    const {name, value}=e.target;
    setInjiza(prev => ({...prev,[name]: value}));
  }
  return (
    <div className='d-grid gap-3'>
      <form action="" style={{
        display:'flex',
        flexDirection:'column'
      }}>
        <MySpan>
        <label htmlFor="name">Name<input onChange={mychange} className='form-control ' name='name' id='name' type="text" /></label>
        <label htmlFor="age">Age<input onChange={mychange} className='form-control ' name='age' id='age' type="text" /></label>
        </MySpan>
        <MySpan>
        <label htmlFor="location">Location<input onChange={mychange} className='form-control' name='location' id='location' type="text" /></label>
        <label htmlFor="ocupation">Ocupations<input onChange={mychange} className='form-control' name='ocupation' id='ocupation' type="text" /></label>
        </MySpan>
        <button className='btn btn-success' onClick={(e)=>{
          e.preventDefault();
          setPeople(prev =>[...prev, injiza])
          
        }}>See the card</button>
      </form>
    </div>
  )
}

export default Typing
