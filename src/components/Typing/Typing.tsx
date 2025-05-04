
import styled from 'styled-components';
const MySpan = styled.span`
  display: flex;
  justify-content: space-around;
`


const Typing = () => {
  return (
    <div className='d-grid gap-3'>
      <form action="" style={{
        display:'flex',
        flexDirection:'column'
      }}>
        <MySpan>
        <label htmlFor="name">Name<input className='form-control ' id='name' type="text" /></label>
        <label htmlFor="age">Age<input className='form-control ' id='age' type="text" /></label>
        </MySpan>
        <MySpan>
        <label htmlFor="location">Location<input className='form-control ' id='location' type="text" /></label>
        <label htmlFor="ocupation">Ocupations<input className='form-control ' id='ocupation' type="text" /></label>
        </MySpan>
        <button className='btn btn-success'>See the card</button>
      </form>
    </div>
  )
}

export default Typing
