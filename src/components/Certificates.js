import React from "react";
import {ArrowUpRight} from "./PortfolioIcons";
import tensorflowAdvanced from "../assets/images/certificates/tensorflow-advanced-techniques.webp";
import improvingDnn from "../assets/images/certificates/improving-deep-neural-networks.webp";
import neuralNetworks from "../assets/images/certificates/neural-networks-deep-learning.webp";

// Dates and verification links are read from the certificates themselves.
// See AI-PORTFOLIO-FACTS.md before adding one.
const certificates = [
  {
    title: "TensorFlow: Advanced Techniques",
    kind: "Specialization · 4 courses",
    date: "Aug 2025",
    image: tensorflowAdvanced,
    width: 1200,
    height: 927,
    verify: "https://coursera.org/verify/specialization/8679J70FQKWW"
  },
  {
    title: "Improving Deep Neural Networks",
    kind: "Course",
    date: "Jul 2024",
    image: improvingDnn,
    width: 1196,
    height: 928,
    verify: "https://coursera.org/verify/5CDNFC3LYJP2"
  },
  {
    title: "Neural Networks and Deep Learning",
    kind: "Course",
    date: "Jan 2024",
    image: neuralNetworks,
    width: 1198,
    height: 926,
    verify: "https://coursera.org/verify/CBQCAVPMU9ZN"
  }
];

export default function Certificates() {
  return (
    <div className="certificates">
      <span className="mono accent">CERTIFICATIONS · DEEPLEARNING.AI</span>
      <ul>
        {certificates.map(c => (
          <li key={c.verify}>
            <a href={c.verify} target="_blank" rel="noreferrer">
              <img
                src={c.image}
                alt={`${c.title} certificate issued to Karrtik Baheti, ${c.date}`}
                width={c.width}
                height={c.height}
                loading="lazy"
                decoding="async"
              />
              <span className="certificate-copy">
                <strong>{c.title}</strong>
                <span className="mono">
                  {c.kind} · {c.date}
                </span>
                <span className="certificate-verify mono">
                  Verify on Coursera <ArrowUpRight />
                </span>
              </span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
