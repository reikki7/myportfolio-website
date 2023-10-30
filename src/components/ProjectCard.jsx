import { Col } from "react-bootstrap";
import React, { useMemo } from "react";

export const ProjectCard = ({ title, description, imgUrl, colSize }) => {
  const memoizedImgUrl = useMemo(() => imgUrl, [imgUrl]);

  return (
    <Col {...colSize}>
      <div className="proj-imgbx">
        <img src={memoizedImgUrl} alt="projects" />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span className="description">{description}</span>
        </div>
      </div>
    </Col>
  );
};
