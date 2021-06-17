import React from 'react';

const HeaderDetail = ({service}) => {
    return (
        <div className="col-6">
            <h1 className="text-primary ">{service.logo}</h1>
            <h4 className="text-decoration">{service.title}</h4>
            <p className="text-secondary" style={{textAlign: 'justify'}}>{service.description}</p>
        </div>
    );
};

export default HeaderDetail;