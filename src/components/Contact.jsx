import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.webp";

export const Contact = () => {
    const formInitialDetails = {
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        message: "",
    };

    const onFormUpdate = (category, value) => {
        setFormDetails({
            ...formDetails,
            [category]: value,
        });
    };

    const [formDetails, setFormDetails] = useState(formInitialDetails);

    return (
        <section className="contact" id="contact">
            <Container>
                <Row className="align-items-center">
                    <Col md={6}>
                        <img src={contactImg} alt="Contact Us" />
                    </Col>
                    <Col md={6}>
                        <h2>Contact Me!</h2>
                        <form action="https://formspree.io/f/xoqorbrk" method="POST">
                            <Row>
                                <Col sm={6} className="px-1">
                                    <input
                                        type="text"
                                        value={formDetails.firstName}
                                        name="firstName"
                                        placeholder="First Name"
                                        onChange={(e) => onFormUpdate("firstName", e.target.value)}
                                        required
                                    />
                                </Col>
                                <Col sm={6} className="px-1">
                                    <input
                                        type="text"
                                        value={formDetails.lastName}
                                        name="lastName"
                                        placeholder="Last Name"
                                        onChange={(e) => onFormUpdate("lastName", e.target.value)}
                                        required
                                    />
                                </Col>
                                <Col sm={6} className="px-1">
                                    <input
                                        type="email"
                                        value={formDetails.email}
                                        name="email"
                                        placeholder="Email Address"
                                        onChange={(e) => onFormUpdate("email", e.target.value)}
                                        required
                                    />
                                </Col>
                                <Col sm={6} className="px-1">
                                    <input
                                        type="tel"
                                        value={formDetails.phone}
                                        name="phone"
                                        placeholder="Phone Number"
                                        onChange={(e) => onFormUpdate("phone", e.target.value)}
                                        required
                                    />
                                </Col>
                                <Col className="px-1">
                                    <textarea
                                        rows="6"
                                        value={formDetails.message}
                                        name="message"
                                        placeholder="Message"
                                        onChange={(e) => onFormUpdate("message", e.target.value)}
                                        required
                                    ></textarea>
                                    <button type="submit" className="rounded">
                                        <span>Submit</span>
                                    </button>
                                </Col>
                            </Row>
                        </form>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};
