import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function App() {


  return (
    <>
      <h1>Welcome to my React</h1>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/28/088776/1.jpg?9292" />
        <Card.Body>
          <Card.Title>APPLE IPHONE</Card.Title>
          <Card.Text>
            APPLE IPHONE 12 PRO (6.1) 5G
            (6GB RAM, 256GB) - PACIFIC BULE.
            Brand Apple
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    </>
  )
}

export default App
