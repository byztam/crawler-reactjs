import React, { Component } from 'react';
import Breadcrumbs from './../common/Breadcrumb';
import {
    Row,
    Col,
    Input
} from 'reactstrap';
import './style.css';

class Request extends Component {
    render() {
        var path = [
            {
                name: "Home",
                path: "/",
                active: false
            },
            {
                name: "Request",
                path: "/request",
                active: true
            }
        ];
        return (
            <div>
                <Breadcrumbs value={path}/>
                
                <Row className="p-5" style={{marginTop: '200px'}}>
                    <Col xs="12">
                        <Row className="form-request">
                            <Col xs="12" sm="12" md="6" lg="6" className="content-1">
                                <img className="img" src="https://wikb.modeltheme.com/wp-content/uploads/2019/06/contact-illustration-600x644.png" alt="" />
                            </Col>
                            <Col xs="12" sm="12" md="6" lg="6">
                                <Input />
                                <Input />
                                <Input />
                                <Input />
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default Request;