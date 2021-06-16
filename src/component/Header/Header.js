import { faHome, faTruckPickup, faUniversity, faUserEdit } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import HeaderDetail from '../HeaderDetail/HeaderDetail';

const Header = () => {
    const serviceData = [
        {
            id: '0',
            title: 'Retail',
            logo: <FontAwesomeIcon icon={faHome} />,
            description: 'Warehouse optimization systems, to guarantee service levels by improving procurement performance'
        },
        {
            id: '1',
            title: 'Supply Chain',
            logo: <FontAwesomeIcon icon={faTruckPickup} />,
            description: 'Applications to support pricing, load and fleet management and increase margins per route'
        },
        {
            id: '2',
            title: 'Financial Services',
            logo: <FontAwesomeIcon icon={faUniversity} />,
            description: 'Deep customer profiling, abandonment prediction, upselling and cross-selling applications and risk identification'
        },
        {
            id: '3',
            title: 'Public Sector',
            logo: <FontAwesomeIcon icon={faUserEdit} />,
            description: 'Support for innovation, change management, marketing strategies for the public service, design of ad hoc solutions'
        }
    ]
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-8">
                    <div className="row">
                        {
                            serviceData.map(service => <HeaderDetail service={service} key={service.id}></HeaderDetail>)
                        }
                    </div>
                </div>

                <div className="col-md-4 p-2 d-flex justify-content-center">
                    <div> 
                        <h3>What do you need?</h3>
                        <p>Business Analytics</p>
                        <p>Marketing & Sales</p>
                        <p>Const check</p>
                        <p>Innovation</p>
                        <p>Automation of processes/ service</p>
                        <p>Digital transformation</p>
                        <p>Digital strategy</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;