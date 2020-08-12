import React, { useState } from 'react';
import {
    Row, 
    Col,
    Container,
    Carousel,
    CarouselItem,
    Button
} from 'reactstrap';

const items = [
    {
        key: 1,
        content: 'Unleash cross-media information without cross-media value maximize timely deliverables for real-time. Unleash cross-media information without cross-media value maximize timely deliverables for real-time.',
        avt: 'https://wikb.modeltheme.com/wp-content/uploads/2018/08/testimonial-member1.jpg',
        name: 'TMTam',
        position: 'Member'
    },
    {
        key: 2,
        content: 'Unleash cross-media information without cross-media value maximize timely deliverables for real-time. Unleash cross-media information without cross-media value maximize timely deliverables for real-time.',
        avt: 'https://wikb.modeltheme.com/wp-content/uploads/2018/08/testimonial-member1.jpg',
        name: 'TMTam 1',
        position: 'Member'
    },
    {
        key: 3,
        content: 'Unleash cross-media information without cross-media value maximize timely deliverables for real-time. Unleash cross-media information without cross-media value maximize timely deliverables for real-time.',
        avt: 'https://wikb.modeltheme.com/wp-content/uploads/2018/08/testimonial-member1.jpg',
        name: 'TMTam 2',
        position: 'Member'
    }
];
const FooterContent = (props) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [animating, setAnimating] = useState(false);

    const next = () => {
        if (animating) return;
        const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
        setActiveIndex(nextIndex);
    }

    const previous = () => {
        if (animating) return;
        const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
        setActiveIndex(nextIndex);
    }

    const slides = items.map((item) => {
        return (
          <CarouselItem onExiting={() => setAnimating(true)} onExited={() => setAnimating(false)} key={item.key}>
              <div className="footer-content-item">
                <p>{item.content}</p>
                <div className="footer-content-info">
                    <div className="avt">
                        <img src={item.avt} alt=""/>
                    </div>
                    <div className="info-name">
                        <span className="name">{item.name}</span>
                        <span className="position">{item.position}</span>
                    </div>
                </div>
              </div>
          </CarouselItem>
        );
    });

    return (
        <Container className="p-0 mt-5">
            
            <Row>
                <Col xs="12" sm="12" lg="6" className="mt-5">
                    <Row>
                        <Col xs="12">
                            <strong><h5>WHAT PEOPLE SAY</h5></strong>
                            <span className="plan-detail">We care about your opinion</span>
                        </Col>
                    </Row>
                    <div className="footer-content-card">
                        <Carousel activeIndex={activeIndex} next={next} previous={previous}>
                            {slides}
                        </Carousel>
                    </div>
                    <Row>
                        <Col xs="12" className="btn-next-previous">
                            <Button onClick={previous}><i className="far fa-chevron-left"></i></Button>
                            <Button onClick={next} className="btn-previous"><i className="far fa-chevron-right"></i></Button>
                        </Col>
                    </Row>
                </Col>
                <Col xs="12" sm="12" lg="6" className="mt-5 text-right p-0">
                    <img className="footer-content-img" src="https://wikb.modeltheme.com/wp-content/uploads/2019/06/testimonials-illustration-600x771.png" alt=""/>
                </Col>
            </Row>
        </Container>
    );
}

export default FooterContent;