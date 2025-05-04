import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Umwe from '../assets/Umwegraphy.jpg'

const Cards = ({umuntu}) => {
  return (
    <div>
      <ul>
          {umuntu.map((uyu,i)=>{
            return (
            <li>
                <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={Umwe} style={{height:'200px'}} />
          <Card.Body>
            <Card.Title>Names: {uyu.name} </Card.Title>
            <Card.Text>
              age: {uyu.age}
            </Card.Text>
            <Card.Text>
              Location: {uyu.location}
            </Card.Text>
            <Card.Text>
              ocupation: {uyu.ocupation}
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
            </li>)
          })}
      </ul>
        
    </div>
  )
}

export default Cards
