import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import styles from "./Navbar.css";

function NavigationBar() {
  return (
    <Navbar bg="transparent" expand="lg" className={styles.navbar}>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/Home" style={{ color: "black" }}>
            Home
          </Nav.Link>
          <Nav.Link href="/transfer" style={{ color: "black" }}>
            Transfer
          </Nav.Link>
          <Nav.Link href="/history" style={{ color: "black" }}>
            Tx History
          </Nav.Link>
          <Nav.Link href="/balance" style={{ color: "black" }}>
            Balance
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
} 

export default NavigationBar;