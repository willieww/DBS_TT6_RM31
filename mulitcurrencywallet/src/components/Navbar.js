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
            Transaction
          </Nav.Link>
          <Nav.Link href="/history" style={{ color: "black" }}>
            Wallet 
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
} 

export default NavigationBar;