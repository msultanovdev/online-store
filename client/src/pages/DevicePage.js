import React, { useContext } from 'react';
import { Button, Card, Col, Container, Image, Row } from 'react-bootstrap';
import { Context } from '../index';

import bigStart from '../assets/star.png';

const DevicePage = () => {
  const {device} = useContext(Context);
  const description = [
    {
      title: 'Iphone',
      description: 'The best'
    }
  ]

  return (
    <Container className='mt-3'>
      <Row>
        <Col md={4}>
          <Image width={300} height={300} src={device.img} />
        </Col>
        <Col md={4}>
          <Row className='d-flex flex-column align-items-center'>
            <h2>{device.name}</h2>
            <div
              className='d-flex align-items-center justify-content-center'
              style={{background: `url(${bigStart}) no-repeat center center`, width: 240, height: 240, backgroundSize: 'cover', fontSize: 64}}
            >
              {device.rating}
            </div>
          </Row>
        </Col>
        <Col md={4}>
          <Card
            className='d-flex flex-column align-items-center justify-content-around'
            style={{width: 300, height: 300, fontSize: 32, border: '5px solid #007BFF'}}
          >
            <h3>{device.price}</h3>
            <Button variant='outline-primary'>Добавить в корзину</Button>
          </Card>
        </Col>
      </Row>
      <Row className='d-flex flex-column mt-3'>
        {description.map(d =>
          <Row style={{background: d.id % 2 === 0 && 'lightblue', padding: 10}} key={d.id}>
            {d.title}: {d.description}
          </Row>  
        )}
      </Row>
    </Container>
  )
}

export default DevicePage;