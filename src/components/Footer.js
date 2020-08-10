import React from 'react';
import {
    Row,
    Col
} from 'reactstrap';

function Footer(){
    var nowYear = new Date().getFullYear();
    return (
        <div>
            <Row className="footer">
                <Col xs="12" sm="12" lg="6" className="footer-copyright">
                    <p>{nowYear} © Theme Developed by <strong><a href="#bottom">CrawlerReactjs</a></strong></p>
                </Col>
                <Col xs="12" sm="12" lg="6" className="footer-right text-right">
                    <span>
                        <a href="#bottom">Privacy Policy</a> | <a href="#bottom">Terms & Conditions</a>
                    </span>
                </Col>
            </Row>
        </div>
    );
}



export default Footer;