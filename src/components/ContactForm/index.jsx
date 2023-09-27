import "./ContactForm.css";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import Swal from 'sweetalert2';


function ContactForm() {
  const form = useRef();

  const handleSubmit = async (e) => { 
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Analizaremos tu proyecto y te contactaremos',
      showConfirmButton: false,
      timer: 5000
    })
    e.preventDefault();

    emailjs
      .sendForm(
        "service_e4yg7ag",
        "template_0opfox9",
        form.current,
        "NqBk0YFnOV3IDGf1L"
      )
      .then(
        
        (result) => {
          form.current.reset()
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <form className="form" ref={form} onSubmit={handleSubmit}>
      <h1>CONTÁCTANOS</h1>
      <label style={{ marginTop: "10px" }} htmlFor="Nombre">
        Nombre
      </label>
      <input
        placeholder="Nombre y apellido"
        id="Nombre"
        type="text"
        required
        name="user_name"
        className="form-control"
      />

      <label style={{ marginTop: "10px" }} htmlFor="correo">
        Correo
      </label>
      <input
        placeholder="email@example.com"
        id="correo"
        type="mail"
        required
        name="user_email"
        className="form-control"
      />

      <label style={{ marginTop: "10px" }} htmlFor="uso">
        Uso del Suelo
      </label>
      <input
        placeholder="Vivienda, Comercio, Gimnasio, etc"
        id="uso"
        type="text"
        required
        name="user_landUse"
        className="form-control"
      />

      <label style={{ marginTop: "10px" }} htmlFor="superficiem2">
        Superficie del Proyecto
      </label>
      <input
        placeholder="m2 aproximados"
        id="superficiem2"
        type="number"
        required
        name="user_measure"
        className="form-control"
      />

      <label style={{ marginTop: "10px" }} htmlFor="descripcion">
        Descripción
      </label>
      <textarea
        placeholder="Breve descripcion del servicio requerido"
        id="descripcion"
        type="text"
        required
        maxLength="250"
        rows="5"
        className="form-control"
        name="message"
      ></textarea>
      <small>Máximo 250 caracteres</small>

      <button
        style={{
          marginTop: "40px",
          background: "rgb(0, 180, 81)",
        }}
        type="submit"
      >
        ENVIAR
      </button>
    </form>
  );
}

export default ContactForm;

/*
import "./ContactForm.css";
import {  useState } from "react";



function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [landUse, setLandUse] = useState("");
  const [measure, setMeasure] = useState("");
  const [message, setMessage] = useState("");

  const [loader, setLoader] = useState(false);

  const handleSubmit = async (e) => {
  
    setName("");
    setEmail("");
    setLandUse("");
    setMeasure("");
    setMessage("");
    
    try {
      e.preventDefault();
   
      alert("Mensaje enviado con éxito");
      setLoader(false);
      //clearFields()
    } catch (e) {
      alert("Ha ocurrido un error, intentalo más tarde");
      setLoader(false);
    }
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <h1>CONTÁCTANOS</h1>
      <label style={{ marginTop: "10px" }} htmlFor="Nombre">
        Nombre
      </label>
      <input
        placeholder="Nombre y apellido"
        id="Nombre"
        type="text"
        required
        className="form-control"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <label style={{ marginTop: "10px" }} htmlFor="correo">
        Correo
      </label>
      <input
        placeholder="email@example.com"
        id="correo"
        type="mail"
        required
        className="form-control"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <label style={{ marginTop: "10px" }} htmlFor="uso">
        Uso del Suelo
      </label>
      <input
        placeholder="Vivienda, Comercio, Gimnasio, etc"
        id="uso"
        type="text"
        required
        className="form-control"
        value={landUse}
        onChange={(e) => setLandUse(e.target.value)}
      />

      <label style={{ marginTop: "10px" }} htmlFor="superficiem2">
        Superficie del Proyecto
      </label>
      <input
        placeholder="m2 aproximados"
        id="superficiem2"
        type="number"
        required
        className="form-control"
        value={measure}
        onChange={(e) => setMeasure(e.target.value)}
      />

      <label style={{ marginTop: "10px" }} htmlFor="descripcion">
        Descripción
      </label>
      <textarea
        placeholder="Breve descripcion del servicio requerido"
        id="descripcion"
        type="text"
        maxLength="250"
        rows="5"
        className="form-control"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      ></textarea>
      <small>Máximo 250 caracteres</small>

      <button
        style={{
          marginTop: "40px",
          background: loader ? "#ccc" : "rgb(0, 180, 81)",
        }}
        type="submit"
      >
        ENVIAR
      </button>
    </form>
  );
}

export default ContactForm; */
