import './ContactForm.css'
function ContactForm() {

    return(
      <form className='form'>
        <h1>
            CONTÁCTANOS
        </h1>
        <label style={{marginTop:"10px"}} for='Nombre' >Nombre</label>
        <input placeholder="Nombre y apellido" id='Nombre' type='text' required class="form-control"/>

        <label style={{marginTop:"10px"}} for='correo'>Correo</label>
        <input placeholder="email@example.com" id='correo' type='mail' required class="form-control" />

        <label style={{marginTop:"10px"}} for='uso'>Uso del Suelo</label>
        <input placeholder="Vivienda, Comercio, Gimnasio, etc" id='uso' type='text' required class="form-control" />

        <label style={{marginTop:"10px"}} for='superficiem2' >Superficie del Proyecto</label>
        <input placeholder="m2 aproximados" id='superficiem2' type='number' required class="form-control"/>

        <label style={{marginTop:"10px"}} for='descripcion' >Descripción</label>
        <textarea placeholder="Breve descripcion del servicio requerido" id='descripcion' type='text'maxLength="250" rows="5"
        class="form-control"></textarea>
        <small >Máximo 250 caracteres</small>

        <button style={{marginTop:"40px"}}type="submit">ENVIAR</button>

      </form>
    );

}

export default ContactForm