import React from "react";
import "../styles/Testimonio.css";

function Testimonio(props) {
  return (
    <div className="testimonio">
      <img
        className="imagen-testimonio"
        src={props.imagen}
        alt="foto de emma"
      />

      <div className="testimonio-texto">
        <p className="nombre-testimonio">
          <strong>{props.nombre}</strong> en {props.pais}
        </p>
        <p className="cargo-testimonio">
          {props.cargo} en <strong>{props.empresa}</strong>
        </p>
        <p className="texto-testimonio">"{props.testimonio}"</p>
      </div>
    </div>
  );
}

export default Testimonio;
