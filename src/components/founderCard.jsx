import React from "react";
import Headshot from "../assets/headshot.jpg";
import Image from "react-bootstrap/Image";

const founderCard = () => {
  return (
    <div className="container mt-5 text-center w-50 mx-auto border rounded p-4 shadow">
      <h2 className="text-primary">Meet the Founder</h2>
      <Image
        src={Headshot}
        alt="Justin Stauffer"
        roundedCircle
        className="mb-3"
        style={{ width: "200px", height: "200px" }}
      />
      <p>
        Hi, I’m Justin Stauffer, founder of Elder Techies. I help seniors stay
        connected, safe, and confident with their technology. From setting up
        new devices to teaching how to use them, I make technology simple and
        friendly. Home visits and remote help available. Call or text [Your
        Phone Number] to schedule!
      </p>
    </div>
  );
};

export default founderCard;
