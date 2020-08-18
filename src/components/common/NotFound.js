import React, { Component } from 'react';
import { 
    Row,
    Col
} from 'reactstrap';
import './css/NotFound.css';
import { Link } from 'react-router-dom';
import Config from './../../../package.json';
class NotFound extends Component {
    render(){
        return(
            <Row className="p-5">
                <Col xs="12" sm="12" md="12" lg="7">
                    <div className="content">
                        <h4 className="content-404">ERROR 404</h4>
                        <h2 className="content-2">We’re sorry, but the page you were looking for <strong>could not be found.</strong></h2>
                        <Link to={'/' + Config.name} className="btn404-backhome">Return To The HomePage</Link>
                    </div>
                </Col>
                <Col xs="12" sm="12" md="12" lg="5">
                    <img className="img-not-found" src="./images/404.png" alt="" />
                </Col>
            </Row>
        );
    }
}

export default NotFound;