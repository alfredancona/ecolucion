import "./clientes.css";
function Clientes() {
  //optimize duplicated code
  return (
    <div className="row">
      <p
        style={{
          color: "#4f4f4f",
          textAlign: "center",
          fontSize: "20px",
          marginRight: "0",
          marginTop: "20px",
          fontWeight: "600",
          marginBottom: "10px",
        }}
      >
        CONFIAN EN NOSOTROS
      </p>

      <div
        className="col-lg-2"
        style={{
          justifyContent: "center",
          alignContent: "center",
          alignItems: "center",
          display: "flex",
        }}
      >
        <img
          className="background-clientes-logo"
          src="../../../public/assets/logo norte merida.png"
          alt="logo NM"
        />
      </div>
      <div
        className="col-lg-2"
        style={{
          justifyContent: "center",
          alignContent: "center",
          alignItems: "center",
          display: "flex",
        }}
      >
        <img
          className="background-clientes-logo"
          src="../../../public/assets/SPONSOR-SIMCA-01 (1).webp"
          alt="logosimca"
        />
      </div>
      <div
        className="col-lg-2"
        style={{
          justifyContent: "center",
          alignContent: "center",
          alignItems: "center",
          display: "flex",
        }}
      >
        <img
          className="background-clientes-logo"
          src="../../../public/assets/logo provincia.png"
          alt="logo prov"
        />
      </div>
      <div
        className="col-lg-2"
        style={{
          justifyContent: "center",
          alignContent: "center",
          alignItems: "center",
          display: "flex",
        }}
      >
        <img
          className="background-clientes-logo"
          src="../../../public/assets/logo ali.png"
          alt="logo prov"
        />
      </div>
      <div
        className="col-lg-2"
        style={{
          justifyContent: "center",
          alignContent: "center",
          alignItems: "center",
          display: "flex",
        }}
      >
        <img
          className="background-clientes-logo"
          src="../../../public/assets/LOGO PLUG.jpg"
          alt="logo prov"
        />
      </div>
      <div
        className="col-lg-2"
        style={{
          justifyContent: "center",
          alignContent: "center",
          alignItems: "center",
          display: "flex",
          marginRight: "0",
        }}
      >
        <img
          className="background-clientes-logo"
          src="../../../public/assets/boxito.png"
          alt="logo prov"
        />
      </div>
    </div>
  );
}

export default Clientes;
