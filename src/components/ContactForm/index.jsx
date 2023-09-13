import "./ContactForm.css";
import { db } from "../firebase";
import { useEffect, useState } from "react";
import { collection, addDoc } from "firebase/firestore";

function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [landUse, setLandUse] = useState("");
  const [measure, setMeasure] = useState("");
  const [message, setMessage] = useState("");

  const [loader, setLoader] = useState(false);

  const handleSubmit = async (e) => {
    /*

    setName("");
    setEmail("");
    setLandUse("");
    setMeasure("");
    setMessage("");
    */
    try {
      e.preventDefault();
      const docRef = await addDoc(collection(db, "users"), {
        name: name,
        email: email,
        landUse: landUse,
        measure: measure,
        message: message,
      });
      alert("Mensaje enviado con éxito");
      setLoader(false);
      //clearFields()
    } catch (e) {
      alert(error.message);
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

export default ContactForm;
