import React from "react";
import Logo from "../assets/ElderTechies_Logo1_transparent.png";
import Image from "react-bootstrap/Image";
import Container from "react-bootstrap/Container";

const welcome = () => {
  return (
    <Container className="pb-5 text-center mx-auto d-flex flex-column justify-content-center align-items-center" style={{ backgroundColor: "#07273d"}} fluid>
      {/* <h1 className="text-primary">Welcome to Elder Techies!</h1> */}
      <Image
        src={Logo}
        alt="Headshot"
        className="rounded-circle"
        style={{ width: "35%", height: "35%" }}
      />
      <h1 style={{color: "#6dd0cc"}}>We Turn Elders Into Techies</h1>
    </Container>
  );
};

export default welcome;
