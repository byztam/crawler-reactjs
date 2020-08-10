import React from 'react';
import {
    Row, 
    Col,
    Container
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
                    <i className="fal fa-cog card-header-icon"></i>
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
                    Get Start
                </div>
            </Col>
        </Col>
        
        <Col xs="12" sm="12" lg="4">
            <Col xs="12" className="plan-card">
                <div style={{width: '100%', textAlign: 'center'}}>
                    <i className="fal fa-cog card-header-icon"></i>
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
                    Get Start
                </div>
            </Col>
        </Col>
        
        <Col xs="12" sm="12" lg="4">
            <Col xs="12" className="plan-card">
                <div style={{width: '100%', textAlign: 'center'}}>
                    <i className="fal fa-cog card-header-icon"></i>
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
                    Get Start
                </div>
            </Col>
        </Col>
    </Row>
</Container>
    );
}

export default BodyContentFirst;