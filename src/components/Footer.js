import React from 'react';
import { Col, Container } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';

function Footer() {
    return(
        <footer className="mt-5">
            <Container fluid={true}>
                <Row className="border-top justify-content-between p-3">
                    <Col className="p-0" md={3} sm={12}>
                        Ilham Muhamad Nizar
                    </Col>
                    <Col className="p-0 d-flex justify-content-end" md={3}> 
                        This site was made by Ilham Muhamad Nizar
                    </Col>
                </Row>
            </Container>
        </footer>
    );
}

export default Footer;