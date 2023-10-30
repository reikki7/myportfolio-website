import { useState, useEffect, useMemo } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import headerImg from "../assets/img/myHeader4.webp";

export const Banner = () => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [text, setText] = useState("Sof");
    const [index, setIndex] = useState(1);
    const period = 500;
    const [delta, setDelta] = useState(150 * Math.random() + 50);

    const tick = useMemo(() => {
        const toRotate = ["Software Engineer", "Frontend Developer", "Web Developer"];
        return () => {
            let i = loopNum % toRotate.length;
            let fullText = toRotate[i];
            let updatedText = isDeleting
                ? fullText.substring(0, text.length - 1)
                : fullText.substring(0, text.length + 1);

            setText(updatedText);

            if (isDeleting) {
                setDelta((prevDelta) => prevDelta / 2);
            }

            if (!isDeleting && updatedText === fullText) {
                setIsDeleting(true);
                setIndex((prevIndex) => prevIndex - 1);
                setDelta(period);
            } else if (isDeleting && updatedText === "") {
                setIsDeleting(false);
                setLoopNum(loopNum + 1);
                setIndex(1);
                setDelta(200 - Math.random() * 100);
            } else {
                setIndex((prevIndex) => prevIndex + 1);
            }
        };
    }, [
        text,
        loopNum,
        isDeleting,
        setDelta,
        setIndex,
        setLoopNum,
        setIsDeleting,
        setText,
    ]);

    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        }, delta);

        return () => {
            clearInterval(ticker);
        };
    }, [text, delta, tick]);

    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        }, delta);

        return () => {
            clearInterval(ticker);
        };
    }, [text, delta, tick]);


    return (
        <section className="banner" id="home">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} cl={7}>
                        <div>
                            <span
                                className="tagline"
                                style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)" }}
                            >
                                Welcome to my Portfolio!
                            </span>
                            <h1>
                                {`Hi! I'm Rei!`}
                                <br />
                                <span className="txt-rotate">
                                    <span className="wrap">
                                        {window.innerWidth < 768 ? "Software Engineer" : text}
                                    </span>
                                </span>
                            </h1>
                            <p
                                className="about-me"
                                style={{
                                    color: "white",
                                    textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
                                }}
                            >
                                Hello! I'm Rei! A Computer Science student. My experience
                                includes creating compelling user interfaces through frontend
                                development and building long-lasting, responsive websites
                                through web development. I am proficient in HTML, CSS,
                                JavaScript, and a variety of other languages and frameworks.
                            </p>
                            <button
                                onClick={() => {
                                    const contactSection = document.getElementById("contact");
                                    contactSection.scrollIntoView({ behavior: "smooth" });
                                }}
                            >
                                Let’s Connect <ArrowRightCircle size={25} />
                            </button>
                        </div>
                    </Col>
                    <Col xs={12} md={6} cl={5}>
                        <img
                            src={headerImg}
                            alt="Header"
                            style={{
                                width: "100%",
                                filter: "drop-shadow(2px 2px 4px rgba(0, 0, 0, 0.1))",
                            }}
                        />
                    </Col>
                </Row>
            </Container>
        </section>
    );
};