import { Container, Row, Col, Nav, Tab } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import { useState } from "react";
import colorSharp2 from "../assets/img/color-sharp2.png";
import artifyImg1 from "../assets/img/ArtifyImg1.webp";
import artifyImg2 from "../assets/img/ArtifyImg2.webp";
import artifyImg3 from "../assets/img/ArtifyImg3.webp";
import artifyImg4 from "../assets/img/ArtifyImg4.webp";
import navIcon2 from "../assets/img/nav-icon2.svg";
import androidImg1 from "../assets/img/android-img1.webp";
import androidImg2 from "../assets/img/android-img2.webp";
import androidImg3 from "../assets/img/android-img3.webp";
import aslImg1 from "../assets/img/asl-img1.webp";
import aslImg2 from "../assets/img/asl-img2.webp";
import aslImg3 from "../assets/img/asl-img3.webp";
import navGo from "../assets/img/nav-go.svg";

import iconReactJS from "../assets/img/iconReactJS.webp";
import iconPython from "../assets/img/iconPython.webp";
import iconJavaScript from "../assets/img/iconJavaScript.webp";
import iconTensorflow from "../assets/img/iconTensorflow.webp";
import iconHTML from "../assets/img/iconHTML.webp";
import iconTailwind from "../assets/img/iconTailwind.webp";
import iconJava from "../assets/img/iconJava.webp";
import iconSanity from "../assets/img/iconSanity.webp";
import iconFirebase from "../assets/img/iconFirebase.webp";

export const Projects = () => {
    const projects = [
        {
            title: "Login Page",
            description:
                "Allows users to sign in to their account using Google. Users can also sign up for a new account.",
            imgUrl: artifyImg4,
        },
        {
            title: "Main Page",
            description:
                "Serves as the initial landing for Artify users. Users can view the latest posts, and search for users and posts.",
            imgUrl: artifyImg1,
        },

        {
            title: "User Profile",
            description:
                "Provides users with a dedicated space to create and exhibit their artwork. Users can also view other users' profiles.",
            imgUrl: artifyImg2,
        },

        {
            title: "Post Page",
            description: "Allows user to view and interact with posts.",
            imgUrl: artifyImg3,
        },
    ];

    const projects2 = [
        {
            title: "Sign Up Page",
            description: "Allows users to create an account and sign in to the app.",
            imgUrl: androidImg1,
        },

        {
            title: "Main Page",
            description:
                "User-friendly interface for browsing and accessing a wide range of products. Features featured items and easy navigation to different categories.",
            imgUrl: androidImg2,
        },
        {
            title: "Product Page",
            description:
                "Users can view product images, read descriptions, check prices, and add items to their cart.",
            imgUrl: androidImg3,
        },
    ];

    const projects3 = [
        {
            title: "ASL Demonstration",
            description: "Letter 'K'",
            imgUrl: aslImg1,
        },
        {
            title: "ASL Demonstration",
            description: "Letter 'J'",
            imgUrl: aslImg2,
        },
        {
            title: "ASL Demonstration",
            description: "Letter 'X'",
            imgUrl: aslImg3,
        },
    ];

    const [activeKey, setActiveKey] = useState("first");

    return (
        <section className="project" id="projects">
            <Container>
                <Row>
                    <Col
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            justifyContent: "center",
                        }}
                    >
                        <h2 className="mb-5">Projects</h2>
                        <Tab.Container
                            id="project-tab"
                            activeKey={activeKey}
                            onSelect={(key) => setActiveKey(key)}
                        >
                            <Nav
                                variant="pills"
                                className="nav-pills mb-4 justify-content-center align-items-center"
                                id="pills-tab"
                            >
                                <Nav.Item>
                                    <Nav.Link eventKey="first">Artify</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="second">Android E-Commerce</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="third">ASL Translator</Nav.Link>
                                </Nav.Item>
                            </Nav>
                            <p className="mt-5 mb-5">
                                {activeKey === "first" &&
                                    "A curated platform for designers and artists to promote their work, fostering innovation. Allows creators to share their work, network, and find inspiration through a unified interface."}
                                {activeKey === "second" &&
                                    " A seamless shopping experience tailored for Android users. Discover a diverse array of products, easily navigate categories, and secure transactions."}
                                {activeKey === "third" &&
                                    "A tool for converting written text to ASL alphabet symbols, serving as an educational resource for learning and communicating in ASL, promoting inclusivity and accessibility."}
                            </p>
                            {activeKey === "first" && (
                                <div
                                    style={{
                                        marginTop: "-20px",
                                        width: "85px",
                                        height: "auto",
                                        gap: "35px",
                                        display: "flex",
                                        justifyContent: "center",
                                        marginBottom: "25px",
                                    }}
                                >
                                    <img src={iconHTML} alt="HTML" style={{ margin: "0 auto" }} />
                                    <img
                                        src={iconJavaScript}
                                        alt="JavaScript"
                                        style={{ margin: "0 auto" }}
                                    />
                                    <img
                                        src={iconReactJS}
                                        alt="ReactJS"
                                        style={{ margin: "0 auto" }}
                                    />
                                    <img
                                        src={iconTailwind}
                                        alt="Tailwind CSS"
                                        style={{ margin: "0 auto" }}
                                    />
                                    <img
                                        src={iconSanity}
                                        alt="Sanity"
                                        style={{ margin: "0 auto" }}
                                    />
                                </div>
                            )}
                            {activeKey === "second" && (
                                <div
                                    style={{
                                        marginTop: "-20px",
                                        width: "85px",
                                        height: "auto",
                                        gap: "35px",
                                        display: "flex",
                                        justifyContent: "center",
                                        marginBottom: "25px",
                                    }}
                                >
                                    <img src={iconJava} alt="Java" style={{ margin: "0 auto" }} />
                                    <img
                                        src={iconFirebase}
                                        alt="Firebase"
                                        style={{ margin: "0 auto" }}
                                    />
                                </div>
                            )}
                            {activeKey === "third" && (
                                <div
                                    style={{
                                        marginTop: "-20px",
                                        width: "85px",
                                        height: "auto",
                                        gap: "35px",
                                        display: "flex",
                                        justifyContent: "center",
                                        marginBottom: "25px",
                                    }}
                                >
                                    <img
                                        src={iconPython}
                                        alt="Python"
                                        style={{ margin: "0 auto" }}
                                    />
                                    <img
                                        src={iconTensorflow}
                                        alt="Tensorflow"
                                        style={{ margin: "0 auto" }}
                                    />
                                </div>
                            )}
                            <Tab.Content>
                                <Tab.Pane eventKey="first">
                                    <Row>
                                        {projects.map((project, index) => {
                                            return (
                                                <ProjectCard
                                                    key={index}
                                                    {...project}
                                                    colSize={{ sm: 8, md: 6 }}
                                                />
                                            );
                                        })}
                                    </Row>
                                </Tab.Pane>
                                <Tab.Pane eventKey="second">
                                    <Row>
                                        {projects2.map((project, index) => {
                                            return (
                                                <ProjectCard
                                                    key={index}
                                                    {...project}
                                                    colSize={{ sm: 6, md: 4 }}
                                                />
                                            );
                                        })}
                                    </Row>
                                </Tab.Pane>
                                <Tab.Pane eventKey="third">
                                    <Row>
                                        {projects3.map((project, index) => {
                                            return (
                                                <ProjectCard
                                                    key={index}
                                                    {...project}
                                                    colSize={{ sm: 6, md: 4 }}
                                                />
                                            );
                                        })}
                                    </Row>
                                </Tab.Pane>
                            </Tab.Content>
                        </Tab.Container>
                        <div className="social-project">
                            {activeKey === "first" && (
                                <>
                                    <a
                                        href="https://github.com/reikki7/artify.git"
                                        style={{ margin: "0 15px" }}
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
                                        href="https://artified.netlify.app/"
                                        style={{ margin: "0 15px" }}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <img
                                            src={navGo}
                                            alt=""
                                            style={{ width: "60%", height: "auto" }}
                                        />
                                    </a>
                                </>
                            )}
                            {activeKey === "second" && (
                                <a
                                    href="https://github.com/reikki7/android-ecommerce-app.git"
                                    style={{ margin: "0 15px" }}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <img
                                        src={navIcon2}
                                        alt=""
                                        style={{ width: "60%", height: "auto" }}
                                    />
                                </a>
                            )}
                            {activeKey === "third" && (
                                <a
                                    href="https://github.com/reikki7/asl-alphabet-translator.git"
                                    style={{ margin: "0 15px" }}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <img
                                        src={navIcon2}
                                        alt=""
                                        style={{ width: "60%", height: "auto" }}
                                    />
                                </a>
                            )}
                        </div>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-right" alt="" src={colorSharp2}></img>
        </section>
    );
};
