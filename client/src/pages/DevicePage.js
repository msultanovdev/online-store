import React, { useContext, useEffect, useState } from 'react';
import { Button, Card, Col, Container, Image, Row } from 'react-bootstrap';
import { Context } from '../index';
import { useParams } from 'react-router-dom';

import bigStart from '../assets/star.png';
import { fetchOneDevice } from '../http/deviceApi';

const DevicePage = () => {
  const [device, setDevice] = useState({info: []});
  const {id} = useParams();
  useEffect(() => {
    fetchOneDevice(id).then(data => setDevice(data))
  }, []);

  return (
    <Container className='mt-3'>
      <Row>
        <Col md={4}>
          <Image width={300} height={300} src={'http://localhost:5000/' + device.img} />
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
        {device.info.map(d =>
          <Row style={{background: d.id % 2 === 0 && 'lightblue', padding: 10}} key={d.id}>
            {d.title}: {d.description}
          </Row>  
        )}
      </Row>
    </Container>
  )
}

export default DevicePage;