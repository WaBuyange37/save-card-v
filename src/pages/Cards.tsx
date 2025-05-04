
import Card from 'react-bootstrap/Card';
import Umwe from '../assets/Umwegraphy.jpg'
import Likebutton from '../components/Likebutton';

interface UmuntuCard {
  name: string;
  age: string;
  location: string;
  ocupation: string;
}

interface CardsProps {
  umuntu: UmuntuCard[];
}


const Cards = ({umuntu}: CardsProps) => {
  return (
    <div className='d-flex flex-wrap gap-3'>
      
          {umuntu.map((uyu,i)=>{
            return (
            
                <Card key={i} style={{ width: '18rem' }}>
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
            {/* <Button variant="primary">Go somewhere</Button> */}
            <Likebutton onClick={()=>console.log('cliked')}/>
          </Card.Body>
        </Card>
            )
          })}
     
        
    </div>
  )
}

export default Cards
