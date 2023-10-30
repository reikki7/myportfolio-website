import { Container, Row, Col } from "react-bootstrap";
import React, { useMemo } from "react";

import iconReactJS from "../assets/img/iconReactJS.webp";
import iconPython from "../assets/img/iconPython.webp";
import iconJavaScript from "../assets/img/iconJavaScript.webp";
import iconVite from "../assets/img/iconVite.webp";
import iconNextJS from "../assets/img/iconNextJS.webp";
import iconHTML from "../assets/img/iconHTML.webp";
import iconCSS from "../assets/img/iconCSS.webp";
import iconTailwind from "../assets/img/iconTailwind.webp";
import iconC from "../assets/img/iconC.webp";
import iconVue from "../assets/img/iconVue.webp";
import iconJava from "../assets/img/iconJava.webp";
import iconBootstrap from "../assets/img/iconBootstrap.webp";
import iconNodeJS from "../assets/img/iconNodeJS.webp";
import iconSanity from "../assets/img/iconSanity.webp";
import iconTypeScript from "../assets/img/iconTypeScript.webp";
import iconPhotoshop from "../assets/img/iconPhotoshop.webp";
import iconPremiere from "../assets/img/iconPremierePro.webp";
import iconResolve from "../assets/img/iconResolve.webp";
import iconAfterEffects from "../assets/img/iconAfterEffects.webp";
import iconTensorflow from "../assets/img/iconTensorflow.webp";
import iconFirebase from "../assets/img/iconFirebase.webp";

import colorSharp from "../assets/img/color-sharp.png";

export const Skills = () => {
  const skillsData = useMemo(
    () => [
      { icon: iconHTML, name: "HTML", boxShadowColor: "#dd4b24" },
      { icon: iconCSS, name: "CSS", boxShadowColor: "#254bdd" },
      { icon: iconJavaScript, name: "JavaScript", boxShadowColor: "#f0db4f" },
      { icon: iconTypeScript, name: "TypeScript", boxShadowColor: "#007acc" },
      { icon: iconReactJS, name: "React JS", boxShadowColor: "#61dafb" },
      { icon: iconC, name: "C", boxShadowColor: "#649ad2" },
      { icon: iconJava, name: "Java", boxShadowColor: "#228ec9" },
      { icon: iconPython, name: "Python", boxShadowColor: "#428ac6" },
      { icon: iconTensorflow, name: "Tensorflow", boxShadowColor: "#ed8e24" },
      { icon: iconNodeJS, name: "Node JS", boxShadowColor: "#80bd01" },
      { icon: iconVue, name: "Vue JS", boxShadowColor: "#4bbb8d" },
      { icon: iconVite, name: "Vite", boxShadowColor: "#a551fe" },
      { icon: iconNextJS, name: "Next JS", boxShadowColor: "#FFFFFF" },
      { icon: iconTailwind, name: "Tailwind CSS", boxShadowColor: "#38b2ac" },
      { icon: iconBootstrap, name: "Bootstrap", boxShadowColor: "#8c13fd" },
      { icon: iconFirebase, name: "Firebase", boxShadowColor: "#fcca3f" },
      { icon: iconSanity, name: "Sanity.io", boxShadowColor: "#f03e2f" },
    ],
    []
  );

  const handleMouseEnter = (e, boxShadowColor) => {
    if (e.target !== e.currentTarget) {
      e.stopPropagation();
      return;
    }
    e.target.style.boxShadow = `0px -20px 0px 0px #151515, 0px 4px 15px 4px ${boxShadowColor}`;
    e.target.style.transform = "scale(1.05)";
  };

  const handleMouseOut = (e, boxShadowColor) => {
    e.target.style.boxShadow = `0px -20px 0px 0px #151515, 0px 4px 8px 2px ${boxShadowColor}`;
    e.target.style.transform = "scale(1)";
  };

  const additionalSkillsData = useMemo(
    () => [
      {
        icon: iconPremiere,
        name: (
          <div>
            Adobe
            <br />
            Premiere Pro
          </div>
        ),
        boxShadowColor: "#9999ff",
      },
      {
        icon: iconPhotoshop,
        name: (
          <div>
            Adobe
            <br />
            Photoshop
          </div>
        ),
        boxShadowColor: "#31a8ff",
      },
      {
        icon: iconAfterEffects,
        name: (
          <div>
            Adobe
            <br />
            After Effects
          </div>
        ),
        boxShadowColor: "#9999ff",
      },
      {
        icon: iconResolve,
        name: "DaVinci Resolve",
        boxShadowColor: "#48c3aa",
      },
    ],
    []
  );

  return (
    <section className="skill" id="skills">
      <Container>
        <Row>
          <Col>
            <div className="skill-bx">
              <h2>
                Experiences
                <p>
                  This section provides insight into my proficiency in various
                  technologies and tools. I specialize in building visually
                  engaging and user-friendly websites.
                </p>
                <div
                  className="skill-grid-container"
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: "50px",
                  }}
                >
                  {skillsData.map((skill, index) => (
                    <div
                      className="item p-4 rounded-bottom"
                      key={index}
                      style={{
                        transition:
                          "box-shadow 0.15s ease-in-out, transform 0.15s ease-in-out",
                        boxShadow: `0px -20px 0px 0px #151515, 0px 4px 8px 2px ${skill.boxShadowColor}`,
                        width: "180px",
                        height: "180px",
                        textAlign: "center",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                      }}
                      onMouseEnter={(e) =>
                        handleMouseEnter(e, skill.boxShadowColor)
                      }
                      onMouseOut={(e) =>
                        handleMouseOut(e, skill.boxShadowColor)
                      }
                    >
                      <img
                        src={skill.icon}
                        alt={skill.name}
                        style={{
                          maxWidth: "60%",
                          maxHeight: "60%",
                          marginBottom: "10px",
                          margin: "auto",
                          display: "block",
                          pointerEvents: "none",
                        }}
                        loading="lazy"
                      />
                      <h5 className="mt-3" style={{ pointerEvents: "none" }}>
                        {skill.name}
                      </h5>
                    </div>
                  ))}
                </div>
              </h2>
              <div className="skill-bx">
                <h2 className="mt-5">
                  Additional Skillset
                  <p>
                    In addition to software development, I have a strong
                    foundation in the use of a variety of visual media tools.
                  </p>
                  <div
                    className="skill-grid-container"
                    style={{
                      display: "flex",
                      flexWrap: "wrap",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: "90px",
                    }}
                  >
                    {additionalSkillsData.map((skill, index) => (
                      <div
                        className="item p-4 rounded-bottom"
                        key={index}
                        style={{
                          transition:
                            "box-shadow 0.15s ease-in-out, transform 0.15s ease-in-out",
                          boxShadow: `0px -20px 0px 0px #151515, 0px 4px 8px 2px ${skill.boxShadowColor}`,
                          width: "190px",
                          height: "190px",
                          textAlign: "center",
                          display: "flex",
                          flexDirection: "column",
                          justifyContent: "center",
                        }}
                        onMouseEnter={(e) =>
                          handleMouseEnter(e, skill.boxShadowColor)
                        }
                        onMouseOut={(e) =>
                          handleMouseOut(e, skill.boxShadowColor)
                        }
                      >
                        <img
                          src={skill.icon}
                          alt={skill.name}
                          style={{
                            maxWidth: "60%",
                            maxHeight: "60%",
                            marginBottom: "10px",
                            margin: "auto",
                            display: "block",
                            pointerEvents: "none",
                          }}
                          loading="lazy"
                        />
                        <h5 className="mt-3" style={{ pointerEvents: "none" }}>
                          {skill.name}
                        </h5>
                      </div>
                    ))}
                  </div>
                </h2>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      <img
        className="background-image-left"
        alt=""
        src={colorSharp}
        loading="lazy"
      />
    </section>
  );
};
