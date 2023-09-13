import React from "react";
import { images } from "./utils";
function ServicesContent() {
  return (
    <div className="row">
      {images.map(({ style, src, alt, text, p }) => (//paragraph?
        <div className="col-lg-4">
          <img style={style} src={src} alt={alt} />
          <div className="title-services">{text}</div>
          <div className="text-services">{p}</div>
        </div>
      ))}
    </div>
  );
}

export default ServicesContent;
