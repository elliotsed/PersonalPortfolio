import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Elliot SEDOGBO </span>
            from <span className="purple"> Cotonou, Benin.</span>
            <br /> I am a Full-Stack Web Developper.
            <br />
            Additionally, I have a degree in Applied English and I have worked with organization like <span className="purple">TTT English Mission </span> as a french/english transcriptionist, subtitler and traslator 
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Reading books
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
            <li className="about-activity">
              <ImPointRight /> Working out
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Elliot</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
