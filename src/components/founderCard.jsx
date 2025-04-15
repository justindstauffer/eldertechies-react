import React from "react";
import Headshot from "../assets/headshot.jpg";
import Image from "react-bootstrap/Image";
import { Container } from "react-bootstrap";

const founderCard = () => {
  return (
    <Container fluid className=" text-center mx-auto d-flex flex-column justify-content-center align-items-center inner-shadow">
      <div className="container my-5 text-center border rounded p-4 shadow">
        <h2 style={{ color: "#07273d" }}>Meet the Founder</h2>
        <Image
          src={Headshot}
          alt="Justin Stauffer"
          roundedCircle
          className="mb-3"
          style={{ width: "200px", height: "200px" }}
        />
        <p>
          Hi, I’m Justin Stauffer, founder of Elder Techies. We help seniors stay
          connected, safe, and confident with their technology. From setting up
          new devices to teaching how to use them, we make technology simple and
          friendly. Consultations and remote help available.
        </p>
        <p>
          Email us: justin@eldertechies.com to schedule today!
        </p>
      </div>
    </Container>

  );
};

export default founderCard;
