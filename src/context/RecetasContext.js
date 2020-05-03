import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

// ========= Estrutra del CONTEXT==========
// PASO 1
// Crear el createContext();
export const RecetasContext = createContext();

// PASO 2
// Crear el Provider
const RecetasProvider = (props) => {
  const [recetas, guardarRecetas] = useState([]);
  const [busqueda, buscarRecetas] = useState({
    nombre: "",
    categoria: "",
  });
  const [consultar, guardarConsultar] = useState(false);

  const { nombre, categoria } = busqueda;

  // cuando el usuario le de submit del form en el FORMULARIO
  // cambia a useState(true); y se ejecuta el useEffect()
  useEffect(() => {
    if (consultar) {
      const obtenerRecetas = async () => {
        const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${nombre}&c=${categoria}`;

        const resultado = await axios.get(url);

        guardarRecetas(resultado.data.drinks);
        // guardarRecetas(resultado.data.drinks);
      };

      obtenerRecetas();
    }
  }, [busqueda]);

  return (
    <RecetasContext.Provider
      value={{
        recetas,
        buscarRecetas,
        guardarConsultar,
      }}
    >
      {props.children}
    </RecetasContext.Provider>
  );
};

export default RecetasProvider;
