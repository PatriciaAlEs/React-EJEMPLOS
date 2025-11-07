import { useState } from "react";
import "../../styles/formulario-magico.css";




function FormularioMagico() {
  return (
    <div className="fondo-magico">
      <h2 className="titulo-formulario">Registrar Aprendiz</h2>

      <form className="form-magico">
        <input type="text" placeholder="Nombre del aprendiz" />
        <input type="text" placeholder="Casa (Ej: Gryffindor)" />
        <input type="number" placeholder="Año" />
        <input type="text" placeholder="Hechizo favorito" />
        <button type="submit">Registrar</button>
      </form>
    </div>
  );
}

export default FormularioMagico;


