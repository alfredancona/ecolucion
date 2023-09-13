import "./Nosotros.css";
function Nosotros() {
  return (
    <div className="background-nosotros" id="nosotros">
      <p id="quote"></p>
      <p className="otro-blockquote">
        {/*Style this quote see https://css-tricks.com/snippets/css/simple-and-nice-blockquote-styling/*/}
        "Todos los proyectos inmobiliarios pueden tener un impacto positivo o
        negativo"
      </p>
      <span className="otro-blockquote">¿Cómo te gustaría ser recordado?</span>
      <hr
        className="hr-home"
        style={{ marginLeft: "15%", marginRight: "15%" }}
      />
      <span className="otro-blockquote">ecolución</span>
    </div>
  );
}

export default Nosotros;
