import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import styles from "./Navbar.css";

function NavigationBar() {
  const onLogout = () => {
    localStorage.setItem('loggedIn', false);
  }
  return (
    <Navbar bg="transparent" expand="lg" className={styles.navbar}>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/Home" style={{ color: "black" }}>
            Home
          </Nav.Link>
          <Nav.Link href="/Wallet" style={{ color: "black" }}>
            Wallet 
          </Nav.Link>
          <Nav.Link href="/Transaction" style={{ color: "black" }}>
            Transaction 
          </Nav.Link>
          <Nav.Link href="/" onClick={onLogout} style={{ color: "black" }}>
            Logout
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
} 

export default NavigationBar;