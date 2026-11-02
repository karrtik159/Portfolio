import React, {useState} from "react";
import {ArrowUpRight, Check, Copy} from "./PortfolioIcons";
const email = "karrtikbaheti159@gmail.com";
export default function PortfolioContact() {
  const [copyState, setCopyState] = useState("");
  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(email);
      setCopyState("Email copied.");
    } catch {
      setCopyState(
        "Couldn’t copy. Select the email above or use the email link."
      );
    }
  }
  return (
    <section className="contact" id="contact">
      <div className="section-kicker mono">
        <span>05 / CONTACT</span>
        <span>GOOD WORK STARTS WITH A CONVERSATION</span>
      </div>
      <div className="contact-grid">
        <h2>
          Have something
          <br />
          in <em>mind?</em>
        </h2>
        <div className="contact-content">
          <p>
            An AI role, a collaboration, or a hard systems problem.
            <br />
            I’d love to hear about it.
          </p>
          <a className="email-link" href={`mailto:${email}`}>
            Let’s talk <ArrowUpRight />
          </a>
          <div className="copy-row">
            <a href={`mailto:${email}`}>{email}</a>
            <button aria-label="Copy email address" onClick={copyEmail}>
              {copyState === "Email copied." ? <Check /> : <Copy />}
            </button>
          </div>
          <p className="copy-feedback" role="status">
            {copyState}
          </p>
        </div>
      </div>
    </section>
  );
}
