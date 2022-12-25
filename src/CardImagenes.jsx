import React from 'react'
import { Card, Button } from 'react-bootstrap';


const CardImagenes = (props) => {
  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={props.imagen}/>
        <Card.Body>
          <Card.Title>{props.titulo}</Card.Title>
          <Card.Text>
            {props.descripcion}
          </Card.Text>
          <Button variant="primary">Ver más</Button>
        </Card.Body>
      </Card>
    </div>

  )
}

export default CardImagenes;
