import React, { Component } from 'react';
import '../css/HeaderContent.css';
import '../css/Common.css';
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
class HeaderContent extends Component {
    render() {
        var items = [
            {
                faIcon: "fal fa-cog card-header-icon",
                title: "Help and Documentation",
                content: "Unlike other Frameworks which try to cover everything, It has been built specifically for WordPress and blog websites"
            },
            {
                faIcon: "fal fa-comment-alt-lines card-header-icon",
                title: "Community and Support",
                content: "Unlike other Frameworks which try to cover everything, It has been built specifically for WordPress and blog websites"
            },
            {
                faIcon: "fal fa-laptop-code card-header-icon",
                title: "Developer and Resources",
                content: "Unlike other Frameworks which try to cover everything, It has been built specifically for WordPress and blog websites"
            }
        ];

        var elements = items.map((item, index) => {
            return (
                <Col xs="12" sm="12" lg="4" key={index}>
                    <Col xs="12" className="card-header">
                        <div style={{width: '100%', textAlign: 'center'}}>
                            <i className={item.faIcon}></i>
                        </div>
                            <h4 className="card-header-title">{item.title}</h4>
                        <div>
                            <p className="card-header-content">{item.content}</p>
                        </div>
                        <div className="card-header-footer">
                            <a href="#top">Read More <i className="fa fa-angle-double-right"></i></a>
                        </div>
                    </Col>
                </Col>
            );
        });
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
                        <img className="img-content-1-2" src="https://byztam.github.io/crawler-reactjs/images/support-illustration-600x698.png" alt=""/>
                    </Col>
                </Row>
                <Row>
                    {elements}
                </Row>
            </Container>
        );
    }
}

export default HeaderContent;