import React, { createContext, useState } from "react";
import axios from "axios";

// CREAR CONTEXT
export const ModalContext = createContext();

const ModalProvider = (props) => {
  // State del PROVIDER
  const [idreceta, guardarIdReceta] = useState(null);

  return (
    <ModalContext.Provider
      value={{
        guardarIdReceta,
      }}
    >
      {props.children}
    </ModalContext.Provider>
  );
};

export default ModalProvider;
