import React from 'react';
import { Col } from 'react-bootstrap';

const DeviceItem = ({ device }) => {
  return (
    <Col md={3}>
        {device.name}
    </Col>
  )
}

export default DeviceItem;