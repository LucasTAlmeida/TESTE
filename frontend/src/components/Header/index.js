import React, { useContext } from "react";


import "./styles.css";

import { AuthContext } from "../context/AuthContext";

function Header(){
    const { auth } = useContext(AuthContext);
//altera caminho da app.js
//console.log('contexto', context);
    return(
        <header>
           <nav>
           <a href="/login">Login</a>
            <a href="/register">Registrar</a>
            <a href="/">Home</a>
           </nav>

           { auth.user && <strong>Seja bem vindo(a)! {auth.user?.name}</strong>}
      </header>

    );
}

export default Header; 