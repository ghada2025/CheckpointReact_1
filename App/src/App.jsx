import './App.css'
import { Description } from './components/Description';
import { Name } from './components/Name';
import { Image } from './components/Image';
import { Price } from './components/Price';

function App() {

  return (
    <>
      <div className="title">
        <div className="cantainer">
          <div className="card-border-top">
          </div>
          <div className="img">
            <Image />
          </div>
          <span> <Name /> </span>
          <p className="job"> <Price /></p>
          <p className="job"> <Description /></p>
        </div>
      </div>
    </>
  )
}

export default App
/*<Card style={{ width: '18rem' }} className='card'>
        <Card.Img variant="top" src={Image()} className='img'>
        </Card.Img>
        <Card.Body>
          <Card.Title className='span'>
            <Name />
          </Card.Title>
          <Card.Text className='job'>
            <Price />          
          </Card.Text>
          <Card.Text className='job'>
            <Description />          
          </Card.Text>
        </Card.Body>
      </Card>*/