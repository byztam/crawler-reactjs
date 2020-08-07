import React from 'react';
import {
    Row, 
    Col,
    InputGroup,
    InputGroupAddon,
    InputGroupText,
    Button,
    Input,
    Container
} from 'reactstrap';
function HeaderContent(){
    return (
<Container className="p-0">
    <Row>
        <Col xs="12" sm="12" lg="6" className="mt-5">
            <h6>KNOWLEDGE BASE</h6>
            <h3>We offer premium support and efficient solutions</h3>
            <InputGroup className="mt-5">
                <Input className="txt-search border-right-0" placeholder="Search" />
                <InputGroupAddon addonType="append" className="search-append">
                    <InputGroupText className="btn0-search bg-transparent white">
                        <Button className="btn-search"><i className="fa fa-search"></i></Button>
                    </InputGroupText>
                </InputGroupAddon>
            </InputGroup>
        </Col>
        <Col xs="12" sm="12" lg="6" >
        </Col>
    </Row>
    <Row>
        <Col xs="12" sm="12" lg="4">
            <Col xs="12" className="card-header">
                <div style={{width: '100%', textAlign: 'center'}}>
                    <i className="fal fa-cog card-header-icon"></i>
                </div>
                <h4 className="card-header-title">Help and Documentation</h4>
                <div>
                    <p className="card-header-content">Unlike other Frameworks which try to cover everything, It has been built specifically for WordPress and blog websites</p>
                </div>
                <div className="card-header-footer">
                    <a href="#top">Read More <i className="fa fa-angle-double-right"></i></a>
                </div>
            </Col>
        </Col>
        <Col xs="12" sm="12" lg="4">
            <Col xs="12" className="card-header">
                <div style={{width: '100%', textAlign: 'center'}}>
                    <i className="fal fa-comment-alt-lines card-header-icon"></i>
                </div>
                <h4 className="card-header-title">Community and Support</h4>
                <div>
                    <p className="card-header-content">Unlike other Frameworks which try to cover everything, It has been built specifically for WordPress and blog websites</p>
                </div>
                <div className="card-header-footer">
                    <a href="#top">Read More <i className="fa fa-angle-double-right"></i></a>
                </div>
            </Col>
        </Col>
        <Col xs="12" sm="12" lg="4">
            <Col xs="12" className="card-header">
                <div style={{width: '100%', textAlign: 'center'}}>
                    <i className="fal fa-laptop-code card-header-icon"></i>
                </div>
                <h4 className="card-header-title">Developer and Resources</h4>
                <div>
                    <p className="card-header-content">Unlike other Frameworks which try to cover everything, It has been built specifically for WordPress and blog websites</p>
                </div>
                <div className="card-header-footer">
                    <a href="#top">Read More <i className="fa fa-angle-double-right"></i></a>
                </div>
            </Col>
        </Col>
    </Row>
</Container>
    );
}

export default HeaderContent;