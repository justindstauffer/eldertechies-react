import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

const footer = () => {
    return (
        <div>
            <footer className="text-center text-lg-start">
                <div className="text-center p-3">
                    © 2025 Elder Techies. All rights reserved.
                </div>
                <Container fluid style={{ backgroundColor: "#07273d" }} className="py-3">
                    <Row className="justify-content-center text-center">
                        <Col xs={6}>
                            <a href="https://x.com/ElderTechies" className="text-white">Twitter</a>
                        </Col>
                        <Col xs={6}>
                            <a href="https://www.youtube.com/yourpage" className="text-white">YouTube</a>
                        </Col>
                        
                    </Row>
                    <Row className="justify-content-center text-center">
                        <Col xs={6}>
                            <a href="https://www.instagram.com/yourpage" className="text-white">Instagram</a>
                        </Col>
                        <Col xs={6}>
                            <a href="https://www.facebook.com/yourpage" className="text-white">Facebook</a>
                        </Col>
                    </Row>
                </Container>
            </footer>
        </div>
    )
}

export default footer