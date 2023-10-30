import { Col, Container, Row } from "react-bootstrap";
import logo from "../assets/img/myLogo.webp";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = () => {
    return (
        <footer className="footer">
            <Container>
                <Row className="align-items-center">
                    <Col sm={6} md={4}>
                        <img
                            src={logo}
                            alt="logo"
                            style={{ width: "80%", height: "auto" }}
                        />
                    </Col>
                    <Col
                        sm={6}
                        md={4}
                        className="text-center text-sm-md mt-5"
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                        }}
                    >
                        <div
                            className="social-icon"
                            style={{ display: "flex", alignItems: "center" }}
                        >
                            <a
                                href="#"
                                style={{ margin: "0 5px" }}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <img src={navIcon1} alt="" />
                            </a>
                            <a
                                href="https://github.com/reikki7?tab=repositories"
                                style={{ margin: "0 5px" }}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <img
                                    src={navIcon2}
                                    alt=""
                                    style={{ width: "60%", height: "auto" }}
                                />
                            </a>
                            <a
                                href="https://www.instagram.com/reinatakidd/"
                                style={{ margin: "0 5px" }}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <img src={navIcon3} alt="" />
                            </a>
                        </div>
                        <p>Copyright 2023. All Right Reserved</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};
