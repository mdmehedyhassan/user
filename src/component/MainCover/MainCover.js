import React from 'react';
import { Card } from 'react-bootstrap';
import Cover from '../../images/cover.jpg'

const MainCover = () => {
    return (
        <div className="">
            <Card>
                <Card.Img variant="top" src={Cover} />
                <div className="bg-primary">
                    <Card.Body className="container">
                        <div className="row">
                            <h2 className="col-8 text-light">Find out how to transform your business!</h2>
                            <div className="col-4 ">
                                <button className="btn btn-success">Request an evaluation</button>
                            </div>
                        </div>
                    </Card.Body>
                </div>
            </Card>
        </div>
    );
};

export default MainCover;