import React, { useState } from "react";
import { useHistory } from "react-router-dom";

import api from '../../services/api';

import "./styles.css";

function Register(){
    const history = useHistory();
    const [usuario, setUsuario] = useState({});

    function handleChange(e){
        //e.target.name
        setUsuario({
            ...usuario,
            [e.target.name]: e.target.value,});
    }

    function handleSubmit(e){
        e.preventDefault();
        //mandar inf para o back
        api.post("/users", usuario).then((response) => {

            history.push('/login');
               });
    }

   return (
       <div className ="container">
        <form onSubmit={handleSubmit}>
            <h2>Cadastro Jogador</h2>
            <div className = "row">
                <span>Nome</span>
                <input type ="text" name= "name" onChange={handleChange} id ="name" required/>
            </div>
            <div className = "row">
                <span>Email</span>
                <input type ="text" name="email" onChange={handleChange} id ="email" required/>
            </div>
            <div className = "row">
                <span>Username</span>
                <input type ="text" name="username" onChange={handleChange} id ="username" required/>
            </div>
            <div className = "row">
                <span>Password</span>
                <input type ="password" name="password" onChange={handleChange} id ="password" required />
            </div>
            <div className = "row">
                <button>Cadastrar</button>
            </div>
        </form>
       </div>
   );
}
export default Register;
