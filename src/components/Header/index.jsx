/*import { Outlet, Link } from "react-router-dom";*/
import React, { useState } from "react";
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBCollapse,
} from "mdb-react-ui-kit";
import LogoNavBar from "../LogoNavBar";
import "./header.css";

function Header() {
  const [showBasic, setShowBasic] = useState(false);

  return (
    <>
      <MDBNavbar
        expand="lg"
        light
        bgColor="light"
        style={{ position: "fixed", top: "0", width: "100%" }}
      >
        <MDBContainer fluid>
          <MDBNavbarBrand style={{ padding: 0 }}>
            <LogoNavBar />
          </MDBNavbarBrand>

          <MDBNavbarToggler
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
            onClick={() => setShowBasic(!showBasic)}
          >
            <MDBIcon icon="bars" fas />
          </MDBNavbarToggler>

          <MDBCollapse navbar show={showBasic}>
            <MDBNavbarNav className="mr-auto mb-2 mb-lg-0 barNav">
              <MDBNavbarItem>
                <MDBNavbarLink active aria-current="page">
                  <a href="#contacto" className="barNav-element">
                    Contacto
                  </a>
                </MDBNavbarLink>
              </MDBNavbarItem>

              <MDBNavbarItem>
                <MDBNavbarLink active aria-current="page">
                  <a href="#servicios" className="barNav-element">
                    Servicios
                  </a>
                </MDBNavbarLink>
              </MDBNavbarItem>

              <MDBNavbarItem>
                <MDBNavbarLink active aria-current="page">
                  <a href="#nosotros" className="barNav-element">
                    Nosotros
                  </a>
                </MDBNavbarLink>
              </MDBNavbarItem>

              <MDBNavbarItem>
                <MDBNavbarLink active aria-current="page">
                  <a href="#home" className="barNav-element">
                    Home
                  </a>
                </MDBNavbarLink>
              </MDBNavbarItem>
            </MDBNavbarNav>
          </MDBCollapse>
        </MDBContainer>
      </MDBNavbar>
    </>
  );
}

export { Header };
