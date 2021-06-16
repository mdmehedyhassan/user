import React from 'react';

const HeaderDetail = ({service}) => {
    return (
        <div className="col-6">
            <h1 className="text-primary">{service.logo}</h1>
            <h4>{service.title}</h4>
            <p style={{textAlign: 'justify'}}>{service.description}</p>
        </div>
    );
};

export default HeaderDetail;