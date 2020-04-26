import React, { createContext, useState } from "react";

// CREAR CONTEXT
export const CategoriasContext = createContext();

// CREAR PROVIDER
// donde se encuentran las funciones y states
const CategoriasProvider = (props) => {
  //Creando el State del Context
  const [hola, guardarhola] = useState("Hola");

  return(
      <CategoriasContext.Provider
        value={{
            hola,
            
        }}
      >
          {props.children}
      </CategoriasContext.Provider>
  )
};
export default CategoriasProvider;