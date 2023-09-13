import Home from "../Home";
import Nosotros from "../Nosotros";
import Servicios from "../Servicios";
import Contacto from "../Contacto";
import Clientes from "../Clientes";
import React from "react";

function Layout() {
  return (
    <>
      <Home />
      <Nosotros />
      <Clientes />
      <Servicios />
      <Contacto />
    </>
  );
}

export default Layout;
