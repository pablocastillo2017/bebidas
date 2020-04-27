import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

// CREAR CONTEXT
export const CategoriasContext = createContext();

// CREAR PROVIDER
// donde se encuentran las funciones y states
const CategoriasProvider = (props) => {
  //Creando el State del Context
  const [categorias, guardarCategorias] = useState([]);

  //Ejecutar Llamado A la API
  useEffect(() => {
    const obtenerCategorias = async () => {
      const url = "https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list";
      const categorias = await axios.get(url);

      guardarCategorias(categorias.data.drinks);
    };
    obtenerCategorias();
  }, []);

  return (
    <CategoriasContext.Provider
      value={{
        categorias,
      }}
    >
      {props.children}
    </CategoriasContext.Provider>
  );
};
export default CategoriasProvider;
