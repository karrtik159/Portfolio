import React, { useState, useEffect, useRef } from "react";
import "./ExperienceCard.scss";
import ColorThief from "colorthief";

export default function ExperienceCard({ cardInfo, isDark }) {
  const [colorArray, setColorArray] = useState([255, 255, 255]); // Default color
  const imgRef = useRef(null);

  useEffect(() => {
    const colorThief = new ColorThief();
    if (imgRef.current.complete) {
      setColorArray(colorThief.getColor(imgRef.current));
    } else {
      imgRef.current.addEventListener("load", function() {
        setColorArray(colorThief.getColor(imgRef.current));
      });
    }
  }, [imgRef]);

  function rgb(values) {
    return values ? `rgba(${values.join(", ")}, 0.85)` : "rgba(255, 255, 255, 0.85)";
  }

  const GetDescBullets = ({ descBullets }) =>
    descBullets ? descBullets.map((item, i) => (
      <li key={i} className="experience-bullet">
        {item}
      </li>
    )) : null;

  return (
    <div className={isDark ? "experience-card-dark" : "experience-card"}>
      <div className="experience-banner" style={{ background: rgb(colorArray) }}>
        <img
          crossOrigin="anonymous"
          ref={imgRef}
          className="experience-logo"
          src={cardInfo.companylogo}
          alt={cardInfo.company}
        />
        <div className="experience-overlay">
          <h5 className="experience-company">{cardInfo.company}</h5>
        </div>
      </div>
      <div className="experience-details">
        <h5 className="experience-role">{cardInfo.role}</h5>
        <h5 className="experience-date">{cardInfo.date}</h5>
        <p className="experience-desc">{cardInfo.desc}</p>
        <ul className="experience-bullets">
          <GetDescBullets descBullets={cardInfo.descBullets} />
        </ul>
      </div>
    </div>
  );
}
