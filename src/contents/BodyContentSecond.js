import React from 'react';
import {
    Row, 
    Col,
    Container,
    Button
} from 'reactstrap';
function BodyContentFirst(){
    return (
<Container className="mt-5 plan">
    <Row>
        <Col xs="12" sm="12" lg="6">
            <p className="plan-title">SELECT YOUR PLAN</p>
            <span className="plan-detail">Documentation, Knowledgebase, Forum & more!</span>
        </Col>
    </Row>
    <Row>
        <Col xs="12" sm="12" lg="4">
            <Col xs="12" className="plan-card">
                <div style={{width: '100%', textAlign: 'center'}}>
                    <i className="fal fa-archive card-header-icon"></i>
                    <p className="plan-card-name">BASIC PLAN</p>
                </div>
                <div className="plan-card-content">
                    <ul className="p-0">
                        <li>Phone &amp; Email Support</li>
                        <li>Custom Search</li>
                        <li>99% Happy Customers</li>
                        <li>Internal Knowledge Base</li>
                    </ul>
                </div>
                <div className="plan-card-footer">
                    <span className="plan-card-price">
                        <sup>$</sup>
                        <span>18</span>
                        <span className="line">/</span>
                    </span>
                    <span className="plan-card-month">month</span>
                </div>
                <div className="plan-card-getstart">
                    <Button className="btn">Get Started</Button>
                </div>
            </Col>
        </Col>
        <Col xs="12" sm="12" lg="4">
            <Col xs="12" className="plan-card middle">
                <div style={{width: '100%', textAlign: 'center'}}>
                    <i className="fal fa-archive card-body-icon"></i>
                    <p className="plan-card-name">BASIC PLAN</p>
                </div>
                <div className="plan-card-content">
                    <ul className="p-0">
                        <li>Phone &amp; Email Support</li>
                        <li>Custom Search</li>
                        <li>99% Happy Customers</li>
                        <li>Internal Knowledge Base</li>
                    </ul>
                </div>
                <div className="plan-card-footer middle">
                    <span className="plan-card-price">
                        <sup>$</sup>
                        <span>18</span>
                        <span className="line">/</span>
                    </span>
                    <span className="plan-card-month">month</span>
                </div>
                <div className="plan-card-getstart middle">
                    <Button className="btn">Get Started</Button>
                </div>
            </Col>
        </Col>
        <Col xs="12" sm="12" lg="4">
            <Col xs="12" className="plan-card">
                <div style={{width: '100%', textAlign: 'center'}}>
                    <i className="fal fa-archive card-header-icon"></i>
                    <p className="plan-card-name">BASIC PLAN</p>
                </div>
                <div className="plan-card-content">
                    <ul className="p-0">
                        <li>Phone &amp; Email Support</li>
                        <li>Custom Search</li>
                        <li>99% Happy Customers</li>
                        <li>Internal Knowledge Base</li>
                    </ul>
                </div>
                <div className="plan-card-footer">
                    <span className="plan-card-price">
                        <sup>$</sup>
                        <span>18</span>
                        <span className="line">/</span>
                    </span>
                    <span className="plan-card-month">month</span>
                </div>
                <div className="plan-card-getstart">
                    <Button className="btn">Get Started</Button>
                </div>
            </Col>
        </Col>
    </Row>
</Container>
    );
}

export default BodyContentFirst;