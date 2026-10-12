import React, {useContext} from "react";
import "./Contact.scss";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import {contactInfo} from "../../portfolio";
import {Fade} from "react-reveal";
import StyleContext from "../../contexts/StyleContext";

export default function Contact() {
  const {isDark} = useContext(StyleContext);
  return (
    <Fade bottom duration={500} distance="16px" fraction={0.05}>
      <div className={isDark ? "main contact-section dark-mode" : "main contact-section"} id="contact">
        <div className="contact-div-main">
          <div className="contact-header">
            <h1 className="heading contact-title section-title">
              {contactInfo.title}
            </h1>
            <p
              className={
                isDark
                  ? "dark-mode contact-subtitle"
                  : "contact-subtitle"
              }
            >
              {contactInfo.subtitle}
            </p>
            <div
              className={
                isDark ? "dark-mode contact-text-div" : "contact-text-div"
              }
            >
              {contactInfo.number && (
                <a
                  className="contact-detail"
                  href={"tel:" + contactInfo.number}
                >
                  {contactInfo.number}
                </a>
              )}
              <a
                className="contact-detail-email"
                href={"mailto:" + contactInfo.email_address}
              >
                {contactInfo.email_address}
              </a>
              <SocialMedia />
            </div>
          </div>
        </div>
      </div>
    </Fade>
  );
}
