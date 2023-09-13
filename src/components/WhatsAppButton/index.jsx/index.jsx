import "./WhatsAppButton.css";
import React from "react";
function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/529993904783?text=Buen día, quisiera más informacion para mi proyecto"
      target="_blank"
    >
      <img
        src="./assets/whatsapp-fill.svg"
        alt="whatsapp-logo"
        className="chatLogo"
      />
    </a>
  );
}

export default WhatsAppButton;
