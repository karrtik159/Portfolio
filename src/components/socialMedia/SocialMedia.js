import React from "react";
import "./SocialMedia.scss";
import {socialMediaLinks} from "../../portfolio";
import {FaGithub, FaLinkedinIn, FaEnvelope} from "react-icons/fa";

export default function socialMedia() {
  if (!socialMediaLinks.display) {
    return null;
  }
  return (
    <div className="social-media-div">
      {socialMediaLinks.github ? (
        <a
          href={socialMediaLinks.github}
          className="icon-button github"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
        >
          <span className="icon-button-inner">
            <FaGithub aria-hidden="true" />
          </span>
        </a>
      ) : null}

      {socialMediaLinks.linkedin ? (
        <a
          href={socialMediaLinks.linkedin}
          className="icon-button linkedin"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <span className="icon-button-inner">
            <FaLinkedinIn aria-hidden="true" />
          </span>
        </a>
      ) : null}

      {socialMediaLinks.gmail ? (
        <a
          href={`mailto:${socialMediaLinks.gmail}`}
          className="icon-button google"
          rel="noopener noreferrer"
          aria-label="Email"
        >
          <span className="icon-button-inner">
            <FaEnvelope aria-hidden="true" />
          </span>
        </a>
      ) : null}
    </div>
  );
}
