import React, {useContext} from 'react';
import { observer } from 'mobx-react-lite';
import { Card, Row } from 'react-bootstrap';
import {Context} from '../index';

const BrandBar = observer(() => {
    const {device} = useContext(Context);

    return (
        <Row className='d-flex'>
            {device.brands.map(brand => 
                <Card 
                    onClick={() => device.setSelectedBrand(brand)}
                    border={brand.id === device.selectedBrand.id ? 'primary' : 'light'}
                    key={brand.id} 
                    className="p-3" 
                    style={{cursor: 'pointer'}}
                >
                    {brand.name}
                </Card>
            )}
        </Row>
    )
});

export default BrandBar;