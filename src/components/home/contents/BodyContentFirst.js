import React, { Component } from 'react';
import '../css/Common.css';
import '../css/BodyContentFirst.css';
import {
    Row, 
    Col,
    Button,
    Container
} from 'reactstrap';
class BodyContentFirst extends Component {
    render() {
        var items = [
            {
                img: "https://wikb.modeltheme.com/wp-content/uploads/2019/06/theme-block1.jpg",
                name: "Oklahoma",
                category: "WordPress Theme"
            },
            {
                img: "https://wikb.modeltheme.com/wp-content/uploads/2019/06/theme-block1.jpg",
                name: "Oklahoma",
                category: "WordPress Theme"
            },
            {
                img: "https://wikb.modeltheme.com/wp-content/uploads/2019/06/theme-block1.jpg",
                name: "Oklahoma",
                category: "WordPress Theme"
            },
            {
                img: "https://wikb.modeltheme.com/wp-content/uploads/2019/06/theme-block1.jpg",
                name: "Oklahoma",
                category: "WordPress Theme"
            },
            {
                img: "https://wikb.modeltheme.com/wp-content/uploads/2019/06/theme-block1.jpg",
                name: "Oklahoma",
                category: "WordPress Theme"
            },
            {
                img: "https://wikb.modeltheme.com/wp-content/uploads/2019/06/theme-block1.jpg",
                name: "Oklahoma",
                category: "WordPress Theme"
            },
            {
                img: "https://wikb.modeltheme.com/wp-content/uploads/2019/06/theme-block1.jpg",
                name: "Oklahoma",
                category: "WordPress Theme"
            },
            {
                img: "https://wikb.modeltheme.com/wp-content/uploads/2019/06/theme-block1.jpg",
                name: "Oklahoma",
                category: "WordPress Theme"
            }
        ];

        var elements = items.map((item, index) => {
            return (
                <Col xs="12" sm="12" lg="3" key={index}>
                    <Col xs="12" className="product p-0">
                        <Col xs="12" className="product-logo p-0">
                            <img src={item.img} alt="" />
                        </Col>
                        <Col xs="12" className="product-detail">
                            <Row className="m-0">
                                <Col xs="10" className="pr-0">
                                    <h6 className="product-name">{item.name}</h6>
                                    <h6 className="product-category">{item.category}</h6>
                                </Col>
                                <Col xs="2" className="pl-0">
                                    <Button className="product-btn-search"><i className="fa fa-search"></i></Button>
                                </Col>
                            </Row>
                        </Col>
                    </Col>
                </Col>
            );
        });
        return (
            <Container className="p-0 mt-5">
            <Row>
                <Col xs="12" sm="12" lg="6" className="mt-5">
                    <strong><h5>SUPPORT OUR PRODUCT</h5></strong>
                </Col>
            </Row>
            <Row>
                {elements}
            </Row>
        </Container>
        );
    }
}

export default BodyContentFirst;