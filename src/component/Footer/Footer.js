import { faFacebook, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const Footer = () => {
    return (
        <div className="container">
            <div style={{textAlign: 'center'}} className="col">
                <div>
                    <p> © 2021 Datatellers srl | Part. VAT number 02847840218 | REA 210752 | Privacy | Cookies information</p>
                </div>
                <div className="text-primary pt-2 pb-5 animate__animated animate__slower animate__infinite animate__zoomIn">
                    <a style={{fontSize: '30px'}} className="p-2" href="https://www.facebook.com/datatellers.info/"><FontAwesomeIcon icon={faFacebook} /></a>
                    <a style={{fontSize: '30px'}} className="p-2" href="https://www.linkedin.com/company/datatellers/?originalSubdomain=it"><FontAwesomeIcon icon={faLinkedinIn} /></a>
                </div>
            </div>
        </div>
    );
};

export default Footer;