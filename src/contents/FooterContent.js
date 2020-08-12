import React, { useState } from 'react';
import {
    Row, 
    Col,
    Container,
    Carousel,
    CarouselItem,
    CarouselControl,
    Button
} from 'reactstrap';

const items = [
    {
        content: 'Unleash cross-media information without cross-media value maximize timely deliverables for real-time. Unleash cross-media information without cross-media value maximize timely deliverables for real-time.',
        avt: 'data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22800%22%20height%3D%22400%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20800%20400%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_15ba800aa1d%20text%20%7B%20fill%3A%23555%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A40pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_15ba800aa1d%22%3E%3Crect%20width%3D%22800%22%20height%3D%22400%22%20fill%3D%22%23777%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22285.921875%22%20y%3D%22218.3%22%3EFirst%20slide%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E',
        name: 'TMTam',
        position: 'Member'
    },
    {
        content: 'Unleash cross-media information without cross-media value maximize timely deliverables for real-time. Unleash cross-media information without cross-media value maximize timely deliverables for real-time.',
        avt: 'data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22800%22%20height%3D%22400%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20800%20400%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_15ba800aa1d%20text%20%7B%20fill%3A%23555%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A40pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_15ba800aa1d%22%3E%3Crect%20width%3D%22800%22%20height%3D%22400%22%20fill%3D%22%23777%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22285.921875%22%20y%3D%22218.3%22%3EFirst%20slide%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E',
        name: 'TMTam',
        position: 'Member'
    },
    {
        content: 'Unleash cross-media information without cross-media value maximize timely deliverables for real-time. Unleash cross-media information without cross-media value maximize timely deliverables for real-time.',
        avt: 'data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22800%22%20height%3D%22400%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20800%20400%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_15ba800aa1d%20text%20%7B%20fill%3A%23555%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A40pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_15ba800aa1d%22%3E%3Crect%20width%3D%22800%22%20height%3D%22400%22%20fill%3D%22%23777%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22285.921875%22%20y%3D%22218.3%22%3EFirst%20slide%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E',
        name: 'TMTam',
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
          <CarouselItem onExiting={() => setAnimating(true)} onExited={() => setAnimating(false)} key={item.src}>
              <div className="footer-content-card">
                <p>{item.content}</p>
                <div className="footer-content-info">
                    <div className="avt">
                        <img src="https://wikb.modeltheme.com/wp-content/uploads/2018/08/testimonial-member1.jpg" alt=""/>
                    </div>
                    <div className="info-name">
                        <span className="name">TMTam</span>
                        <span className="position">Member</span>
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

                    <Carousel activeIndex={activeIndex}>
                        {slides}
                        <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
                        <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
                    </Carousel>
                    <Row>
                        <Col xs="12" className="btn-next-previous">
                            <Button onClickHandler={previous}><i class="far fa-chevron-left"></i></Button>
                            <Button className="btn-previous" onClickHandler={next}><i class="far fa-chevron-right"></i></Button>
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