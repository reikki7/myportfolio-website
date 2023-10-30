import { Navbar, Container, Nav } from "react-bootstrap";
import { useState, useEffect, useCallback, memo } from "react";
import logo from "../assets/img/myLogo.webp";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";
import { HashLink } from "react-router-hash-link";
import { BrowserRouter as Router } from "react-router-dom";

export const NavBar = memo(() => {
    const [activeLink, setActiveLink] = useState("home");
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };
        window.addEventListener("scroll", onScroll);

        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    const onUpdateActiveLink = useCallback((value) => {
        setActiveLink(value);
    }, []);

    return (
        <Router>
            <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
                <Container>
                    <Navbar.Brand href="/" style={{ width: "200px", height: "auto" }}>
                        <img
                            src={logo}
                            alt="Logo"
                            style={{ width: "100%", height: "100%" }}
                        />
                    </Navbar.Brand>

                    <Navbar.Toggle aria-controls="basic-navbar-nav">
                        <span className="navbar-toggler-icon"></span>
                    </Navbar.Toggle>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link
                                href="#home"
                                className={
                                    activeLink === "home" ? "active navbar-link" : "navbar-link"
                                }
                                onClick={() => onUpdateActiveLink("home")}
                            >
                                Home
                            </Nav.Link>
                            <Nav.Link
                                href="#skills"
                                className={
                                    activeLink === "skills" ? "active navbar-link" : "navbar-link"
                                }
                                onClick={() => onUpdateActiveLink("skills")}
                            >
                                Experiences
                            </Nav.Link>
                            <Nav.Link
                                href="#projects"
                                className={
                                    activeLink === "projects"
                                        ? "active navbar-link"
                                        : "navbar-link"
                                }
                                onClick={() => onUpdateActiveLink("projects")}
                            >
                                Projects
                            </Nav.Link>
                        </Nav>
                        <span className="navbar-text">
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
                            <HashLink to="#contact">
                                <button className="vvd">
                                    <span>Contact Me!</span>
                                </button>
                            </HashLink>
                        </span>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </Router>
    );
});

export default memo(NavBar);
