import React from 'react';
import '../css/Common.css';
import '../css/BodyContentSecond.css';
import {
    Row, 
    Col,
    Container,
    Button
} from 'reactstrap';
function BodyContentFirst(){
    var items= [
        {
            faIcon: 'fal fa-archive card-header-icon',
            name: 'BASIC PLAN',
            contents: [
                'Phone & Email Support',
                'Custom Search',
                '99% Happy Customers',
                'Internal Knowledge Base'],
            price: '18',
            titleCss: 'plan-card',
            contentCss: 'plan-card-content2',
            footerCss: 'plan-card-footer'
        },
        {
            faIcon: 'fal fa-archive card-header-icon',
            name: 'BASIC PLAN',
            contents: [
                'Phone & Email Support',
                'Custom Search',
                '99% Happy Customers',
                'Internal Knowledge Base'],
            price: '36',
            titleCss: 'plan-card middle',
            contentCss: 'plan-card-content2 middle',
            footerCss: 'plan-card-footer middle'
        },
        {
            faIcon: 'fal fa-archive card-header-icon',
            name: 'BASIC PLAN',
            contents: [
                'Phone & Email Support',
                'Custom Search',
                '99% Happy Customers',
                'Internal Knowledge Base'],
            price: '48',
            titleCss: 'plan-card',
            contentCss: 'plan-card-content2',
            footerCss: 'plan-card-footer'
        }
    ];

    var elements = items.map((item, index) => {
        return <Col xs="12" sm="12" lg="4" key={index}>
                    <Col xs="12" className={item.titleCss}>
                        <div style={{width: '100%', textAlign: 'center'}}>
                            <i className={item.faIcon}></i>
                            <p className="plan-card-name">{item.name}</p>
                        </div>
                        <div className="plan-card-content1">
                            <ul className="p-0">
                                {
                                    item.contents.map((content, x) => { 
                                        return <li key={x}>
                                                    {content}
                                                </li>; 
                                    })
                                }
                            </ul>
                        </div>
                        <div className={item.contentCss}>
                            <span className="plan-card-price">
                                <sup>$</sup>
                                <span>{item.price}</span>
                                <span className="line">/</span>
                            </span>
                            <span className="plan-card-month">month</span>
                        </div>
                        <div className={item.footerCss}>
                            <Button className="btn">Get Started</Button>
                        </div>
                    </Col>
                </Col>
    });
    return (
        <Container className="mt-5 plan">
            <Row>
                <Col xs="12" sm="12" lg="6">
                    <p className="plan-title">SELECT YOUR PLAN</p>
                    <span className="plan-detail">Documentation, Knowledgebase, Forum & more!</span>
                </Col>
            </Row>
            <Row>
                {elements}
            </Row>
        </Container>
    );
}

export default BodyContentFirst;