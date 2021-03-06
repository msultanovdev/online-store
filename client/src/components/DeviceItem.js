import React from 'react';
import { Card, Col, Image } from 'react-bootstrap';
import Star from '../assets/star.png';
import {useNavigate} from 'react-router-dom';
import { DEVICE_ROUTE } from '../utils/consts';

const DeviceItem = ({ device }) => {
  const navigate = useNavigate();

  return (
    <Col md={3} className='mt-3' onClick={() => navigate(DEVICE_ROUTE + '/' + device.id)}>
        <Card style={{width: 150, cursor: 'pointer'}} border="light">
          <Image src={'http://localhost:5000/' + device.img} width={150} height={150} />
          <div className='text-black-50 mt-1 d-flex justify-content-between align-items-center'>
            <div>Apple</div>
            <div className='d-flex align-items-center'>
              <div className='mr-1'>{device.rating}</div>
              <Image src={Star} width={17} height={17} />
            </div>
          </div>
          <div>{device.name}</div>
        </Card>
    </Col>
  )
}

export default DeviceItem;