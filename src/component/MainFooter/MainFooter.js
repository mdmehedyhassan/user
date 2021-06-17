import React from 'react';
import FooterLogo from '../../images/footer-logo.png'
import { faHome, faTruckPickup, faUniversity, faUserEdit } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const MainFooter = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-4 col-sm-6">
                    <img className="w-100" src={FooterLogo} alt="" />
                </div>
                <div className="col-md-8 col-sm-6">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="row p-3">
                                <div className="col-sm-6">
                                    <h4>MENU</h4>
                                    <div className="text-secondary">
                                        <button type="button" className="btn btn-link">Solutions</button><br />
                                        <button type="button" className="btn btn-link">Services</button><br />
                                        <button type="button" className="btn btn-link">Company</button><br />
                                        <button type="button" className="btn btn-link">Careers</button><br />
                                        <button type="button" className="btn btn-link">Network</button><br />
                                        <button type="button" className="btn btn-link">Contacts</button><br />
                                    </div>
                                </div>
                                <div className="col-sm-6 text-secondary">
                                    <h4 className="text-dark">WORKING HOURS</h4>
                                    <p><b className="text-dark">Mon - Fri</b>: 9:00 - 19:00</p>
                                    <p>Vai werner Von Siemens, 19 39100 Bolzano</p>
                                    <p><b className="text-dark">Tel</b>: +39 04711953600</p>
                                    <p><b className="text-dark">Email</b>:info@datatellers.info</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="row">
                                <div className="col-sm-6">
                                    <h1 className="text-primary "><FontAwesomeIcon icon={faHome} /></h1>
                                    <h4 className="text-decoration">Retail</h4>
                                </div>
                                <div className="col-sm-6">
                                    <h1 className="text-primary "><FontAwesomeIcon icon={faTruckPickup} /></h1>
                                    <h4 className="text-decoration">Supply Chain</h4>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-sm-6">
                                    <h1 className="text-primary "><FontAwesomeIcon icon={faUniversity} /></h1>
                                    <h4 className="text-decoration">Financial Services</h4>
                                </div>
                                <div className="col-sm-6">
                                    <h1 className="text-primary "><FontAwesomeIcon icon={faUserEdit} /></h1>
                                    <h4 className="text-decoration">Public Sector</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div >
        </div >
    );
};

export default MainFooter;