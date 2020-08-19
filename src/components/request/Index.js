import React, { Component } from 'react';
import Breadcrumbs from './../common/Breadcrumb';
import {
    Row,
    Col,
    Input,
    InputGroup,
    InputGroupAddon,
    InputGroupText
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
                            <Col xs="12" sm="12" md="6" lg="6" className="content-2">
                                <InputGroup className="mt-3">
                                    <InputGroupAddon addonType="prepend">
                                    <InputGroupText className="left-icon bg-transparent">
                                        <i className="fal fa-user"></i>
                                    </InputGroupText>
                                    </InputGroupAddon>
                                    <Input placeholder="Full name" />
                                </InputGroup>

                                <InputGroup className="mt-3">
                                    <InputGroupAddon addonType="prepend">
                                    <InputGroupText className="left-icon bg-transparent">
                                        <i className="fal fa-address-card"></i>
                                    </InputGroupText>
                                    </InputGroupAddon>
                                    <Input placeholder="Department" />
                                </InputGroup>

                                <InputGroup className="mt-3">
                                    <InputGroupAddon addonType="prepend">
                                    <InputGroupText className="left-icon bg-transparent">
                                        <i className="fal fa-building"></i>
                                    </InputGroupText>
                                    </InputGroupAddon>
                                    <Input placeholder="Building Number" />
                                </InputGroup>

                                <InputGroup className="mt-3">
                                    <InputGroupAddon addonType="prepend">
                                    <InputGroupText className="left-icon bg-transparent">
                                        <i className="fal fa-at"></i>
                                    </InputGroupText>
                                    </InputGroupAddon>
                                    <Input placeholder="Email" />
                                </InputGroup>

                                <InputGroup className="mt-3">
                                    <InputGroupAddon addonType="prepend">
                                    <InputGroupText className="left-icon-textarea bg-transparent">
                                        <i className="fal fa-edit icon-textarea"></i>
                                    </InputGroupText>
                                    </InputGroupAddon>
                                    <Input type="textarea" placeholder="Comment and Questions" />
                                </InputGroup>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default Request;